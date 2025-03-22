import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface Crumb {
  title: string;
  link: string;
}

interface BreadcrumbsComponentProps {
  crumbs: Crumb[];
}

const BreadcrumbsComponent: React.FC<BreadcrumbsComponentProps> = ({
  crumbs,
}) => {
  return (
    <Breadcrumbs className={"mb-4"} size={"md"}>
      {crumbs.length > 0 &&
        crumbs.map((crumb, i) => (
          <BreadcrumbItem key={i}>
            <Link href={crumb.link}>{crumb.title}</Link>
          </BreadcrumbItem>
        ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
