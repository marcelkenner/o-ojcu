import SectionShell from "@/components/layout/SectionShell";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import type { Copy } from "@/types";
import { anchors } from "@/lib/routes";
import ReaderStoriesViewModel from "./ReaderStoriesViewModel";

interface Props {
  copy: Copy["readerStories"];
}

export default function ReaderStories({ copy }: Props) {
  const viewModel = new ReaderStoriesViewModel(copy);
  return (
    <SectionShell id={anchors.readerStories} title={viewModel.title} intro={viewModel.intro} tone="paper">
      <Container size="lg" className="grid grid--three">
        {viewModel.cards.map((story) => (
          <Card key={story.title} title={story.title} variant="paper">
            <div className="reader-story">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body muted">
                  {paragraph}
                </p>
              ))}
              <div className="reader-story__meta">
                <p className="muted">{story.name}</p>
                {story.role && <p className="fine-print">{story.role}</p>}
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </SectionShell>
  );
}
