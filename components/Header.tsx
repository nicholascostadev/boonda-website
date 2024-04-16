import { ShareNowButton } from './share-now-button';
import { Button } from './ui/button';

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <section className="py-8 pt-12">
        <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
        <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
          Share your files
          <span className="font-bold"> fast</span> with{' '}
          <span className="font-bold">Boonda</span>
        </p>
      </section>

      <div className="flex justify-center items-center">
        <ShareNowButton />
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
