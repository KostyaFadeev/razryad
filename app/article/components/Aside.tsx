import { Anchor } from "antd";
import styles from "./Aside.module.css";
import React, { ReactNode } from "react";

interface Heading {
  id: string;
  text: string;
}

interface AsideProps {
  headings: Heading[];
  onHeadingClick: (
    e: React.MouseEvent<HTMLElement>,
    link: {
      title: ReactNode;
      href: string;
    },
  ) => void;
}

const Aside: React.FC<AsideProps> = ({ headings, onHeadingClick }) => {
  return (
    <aside className={`${styles.asideDesktop} w-64 ml-8`}>
      <h3 className={"font-medium text-xl mb-4"}>Оглавление</h3>
      <Anchor
        affix={false}
        offsetTop={100}
        onClick={onHeadingClick}
        items={headings.map((heading) => ({
          key: heading.id,
          href: `#${heading.id}`,
          title: heading.text,
        }))}
      />
    </aside>
  );
};

export default Aside;
