import { Pagination } from "@nextui-org/react";

interface PaginationComponentProps {
  total: number; // Общее количество страниц
  initialPage: number; // Начальная страница
  onChange: (page: number) => void; // Функция для обработки изменения страницы
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  total,
  initialPage,
  onChange,
}) => {
  return (
    <Pagination
      className={"mt-4"}
      isCompact
      showControls
      initialPage={initialPage}
      total={total}
      onChange={onChange}
    />
  );
};

export default PaginationComponent;
