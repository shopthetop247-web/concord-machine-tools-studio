import { client } from '@/lib/sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import { Metadata } from 'next';

interface PageProps {
  params: {
    brand: string;
    model: string;
  };
}

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).auto('format').url();

const normalize = (str: string) =>
  str?.toLowerCase().replace(/\s+/g, '-').trim();

/* -------------------------
   SEO
-------------------------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const brand = params.brand.replace(/-/g, ' ');
  const model = params.model.replace(/-/g, ' ');

  return {
    title: `Used ${brand} ${model} CNC Machines for Sale`,
    description: `Browse used ${brand} ${model} CNC machines with photos, pricing, and availability.`,
  };
}

/* -------------------------
   PAGE
-------------------------- */
export default async function ModelPage({ params }: PageProps) {
  const brandName = params.brand.replace(/-/g, ' ');
  const modelSlug = params.model;

  const machines = await client.fetch(
    `*[
      _type == "machine" &&
      lower(brand) == lower($brand)
    ]{
      _id,
      name,
      model,
      slug,
      category->{slug},
      subcategory->{slug},
      images[]{asset->},
      yearOfMfg,
      stockNumber,
      modelDescription
    }`,
    { brand: brandName }
  );

  const filtered = machines.filter((m: any) =>
    normalize(m.model || '') === modelSlug
  );

  const modelName = filtered[0]?.model || modelSlug.replace(/-/g, ' ');

  const modelDescription =
    filtered.find((m: any) => m.modelDescription?.length)?.modelDescription;

  /* -------------------------
     RELATED MODELS
  -------------------------- */
  const relatedModels = Array.from(
    new Set(
      machines
        .map((m: any) => m.model)
        .filter(Boolean)
    )
  )
    .filter((m) => normalize(m) !== modelSlug)
    .slice(0, 6);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">

      {/* BREADCRUMB */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> /{' '}
        <Link href={`/brands/${params.brand}`}>{brandName}</Link> /{' '}
        {modelName}
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-semibold mb-4">
        Used {brandName} {modelName} CNC Machines for Sale
      </h1>

      {/* SEO DESCRIPTION BLOCK */}
      {modelDescription && (
        <div className="max-w-3xl text-gray-700 mb-6">
          <p>{modelDescription}</p>
        </div>
      )}

      {/* RESULTS */}
      {filtered.length === 0 ? (
        <p className="text-gray-600">
          No current inventory for this model.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">

          {filtered.map((machine: any) => {
            const imageUrl = machine.images?.[0]
              ? urlFor(machine.images[0])
              : '/placeholder.jpg';

            return (
              <Link
                key={machine._id}
                href={`/inventory/${machine.category.slug.current}/${machine.subcategory.slug.current}/${machine.slug.current}`}
                className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
              >

                <div className="h-48 w-full">
                  <img
                    src={imageUrl}
                    alt={machine.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h2 className="font-medium">{machine.name}</h2>
                  <p className="text-sm text-gray-500">
                    {machine.yearOfMfg} | {machine.stockNumber}
                  </p>
                </div>

              </Link>
            );
          })}

        </div>
      )}

      {/* RELATED MODELS */}
      {relatedModels.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-3">
            Related {brandName} Models
          </h2>

          <div className="flex flex-wrap gap-2">
            {relatedModels.map((m) => {
              const slug = normalize(m);

              return (
                <Link
                  key={m}
                  href={`/models/${params.brand}/${slug}`}
                  className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white transition"
                >
                  {m}
                </Link>
              );
            })}
          </div>
        </section>
      )}

    </main>
  );
}
