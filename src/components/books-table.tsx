"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BooksTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventori Buku</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kode</TableHead>
              <TableHead>Judul</TableHead>
              <TableHead>Pengarang</TableHead>
              <TableHead>Total Stok</TableHead>
              <TableHead>Ketersediaan</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono">JK-45</TableCell>
              <TableCell className="font-medium">Harry Potter</TableCell>
              <TableCell>JK Rowling</TableCell>
              <TableCell>2</TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <Badge>Tersedia</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
