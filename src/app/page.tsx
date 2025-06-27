import { BooksTable } from "@/components/books-table";
import { MembersTable } from "@/components/members-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <div className="container mx-auto my-10">
        <Tabs defaultValue="books" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="books">Buku</TabsTrigger>
            <TabsTrigger value="member">Member</TabsTrigger>
          </TabsList>
          <TabsContent value="books">
            <BooksTable />
          </TabsContent>
          <TabsContent value="member">
            <MembersTable />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
