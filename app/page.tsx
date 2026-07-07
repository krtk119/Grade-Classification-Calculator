import ModuleForm from "@/components/ModuleForm";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Grade Calculator</h1>
        <ModuleForm />
      </div>
    </main>
  );
}