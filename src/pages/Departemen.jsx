import Seo from "../components/Seo";
import Culture from "../components/Culture";

export default function Departemen() {
  return (
    <div className="pt-24 pb-8 bg-pattern-grid min-h-screen">
      <Seo
        title="Departemen"
        path="/departemen"
        description="Tugas dan fungsi setiap departemen di HMPS Informatika UINSMHB, beserta program kerja masing-masing."
      />
      <Culture />
    </div>
  );
}
