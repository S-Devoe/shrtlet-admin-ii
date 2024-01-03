import {
  Table as T,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { format, parse } from "date-fns";
import { numberToNaira } from "@/lib/currency";

export interface TableColumnItem {
  ref: string;
  header: string;
  type: "string" | "number" | "date" | "currency";
  dateFormat?: string;
  render?: (value: any) => React.ReactNode;
}

interface TableProps {
  variant?:
    | "simple"
    | "striped"
    | "unstyled"
    | "dashed"
    | "dotted"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
    | undefined;
  caption?: string;
  columns: TableColumnItem[];
  data: any[];
}

export default function Table({
  caption,
  variant = "unstyled",
  columns,
  data,
}: TableProps) {
  const renderCell = (
    value: any,
    type: TableColumnItem["type"],
    dateFormat: string = "dd/MM/yyyy"
  ) => {
    switch (type) {
      case "date":
        return format(parse(value, "dd/MM/yyyy", new Date()), dateFormat);
      case "number":
        return new Intl.NumberFormat().format(value);
      case "string":
        return value;
      case "currency":
        return numberToNaira(value);
      default:
        return value;
    }
  };
  return (
    <TableContainer>
      <T variant={variant}>
        {caption && <TableCaption>{caption}</TableCaption>}
        <Thead className="mb-6">
          <Tr>
            {columns.map((column) => (
              <Th
                fontFamily={"var(--font-sans)"}
                className="text-primary-lighter"
                letterSpacing={"normal"}
                textAlign={"center"}
                textTransform={"capitalize"}
                fontSize="md"
                key={column.ref}
              >
                {column.header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, idx) => (
            <Tr key={idx} className="border-b ">
              {columns.map(({ ref, render, type }) => (
                <Td
                  key={ref}
                  textAlign={"center"}
                  fontSize={"md"}
                  fontWeight={"normal"}
                  textTransform={"capitalize"}
                >
                  {render ? render(row[ref]) : renderCell(row[ref], type)}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </T>
    </TableContainer>
  );
}
