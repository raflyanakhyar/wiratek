"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BorrowReturnForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Buku</CardTitle>
        <CardDescription>
          Peminjaman atau pengembalian buku menggunakan member dan kode buku
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="borrow" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="borrow">Borrow Book</TabsTrigger>
            <TabsTrigger value="return">Return Book</TabsTrigger>
          </TabsList>

          <TabsContent value="borrow">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="borrow-member">Member Code</Label>
                <Input id="borrow-member" placeholder="e.g., M001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="borrow-book">Book Code</Label>
                <Input id="borrow-book" placeholder="e.g., JK-45" />
              </div>
              <Button type="submit" className="w-full">
                Peminjaman Buku
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="return">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="return-member">Member Code</Label>
                <Input id="return-member" placeholder="e.g., M001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="return-book">Book Code</Label>
                <Input id="return-book" placeholder="e.g., JK-45" />
              </div>
              <Button type="submit" className="w-full">
                Pengembalian Buku
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
