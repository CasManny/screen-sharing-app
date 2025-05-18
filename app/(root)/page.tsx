import { Header } from "@/components/header";
import { VideoCard } from "@/components/video-card";
import { dummyCards } from "@/constants";
export default function Home() {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <div className="video-grid">
        {dummyCards.map((data) => (
          <VideoCard
            key={data.id}
            {...data}
          />
        ))}
      </div>
    </main>
  );
}
