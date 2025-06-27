import { BooksTable } from "@/components/books-table";
import { MembersTable } from "@/components/members-table";

export default function Home() {
  return (
    <>
      <BooksTable />
      <MembersTable />
    </>
  );
}
