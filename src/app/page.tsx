import { BooksTable } from "@/components/books-table";
import { BorrowReturnForm } from "@/components/borrow-return-form";
import { MembersTable } from "@/components/members-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Peminjaman Buku</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <BorrowReturnForm />
          </div>
          <div className="lg:col-span-2">
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
        </div>
      </div>
      {/* <div className="container mx-auto my-20 space-y-10">
        <BorrowReturnForm></BorrowReturnForm>
        <div className="grid">
          
        </div>
      </div> */}
    </>
  );
}
