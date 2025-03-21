import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Button>Primary</Button>
        <Button variant="destructive" disabled>
          Danger Disabled
        </Button>
        <Button variant="outline" size="sm">
          Small Outline
        </Button>
        <Button variant="ghost">Ghost</Button>
      </main>
    </div>
  );
}
