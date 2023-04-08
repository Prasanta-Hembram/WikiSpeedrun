import { toast } from "react-hot-toast";
import { WikiRandom } from "./RandomButton/RandomButton.types";

export const getHighestLinksPage = (data: WikiRandom) => {
  if (!data.query?.pages) return;
  const highestLinksPage = Object.values(data.query.pages)
    .filter((page) => Object.prototype.hasOwnProperty.call(page, "linkshere"))
    .reduce((prev, current) => {
      const previousLinksphere = prev?.linkshere ?? [];
      const currentLinksphere = current?.linkshere ?? [];
      return previousLinksphere.length > currentLinksphere.length ? prev : current;
    });

  const title = highestLinksPage.title;
  const pageid = highestLinksPage.pageid;
  return { title, pageid };
};

interface RandomSuccessProps {
  setArticle: (article: string) => void;
  data: WikiRandom;
}

const errorToast = () => toast.error("Random failed, try again", { position: "bottom-center" });

export const handleOnRandomSuccess = ({ setArticle, data }: RandomSuccessProps) => {
  const articleWithLinks = getHighestLinksPage(data);
  if (!articleWithLinks?.title || articleWithLinks?.title.includes("(disambiguation)")) {
    errorToast();
    return;
  }
  setArticle(articleWithLinks?.title);
};