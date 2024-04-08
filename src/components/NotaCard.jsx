/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { deleteNote } from "../utils/apiNotes";
import { useState } from "react";
import Linkify from "react-linkify";
import "./../styles/audioplayer.css";
import { Link } from "react-router-dom";

export default function NotaCard({ title, autor, content, important, id }) {
  console.log(content);
  const [loading, setLoading] = useState(false);
  const isImportant = important ? "border-l-4 border-purple-500 " : "";
  const handleDelete = async () => {
    setLoading(true);
    const deleteData = await deleteNote(id);
    setLoading(false);
    window.location.reload();
    console.log(deleteData);
  };
  return (
    <Link to={`/notas/${id}`}>
      <Card
      className={`flex flex-col shadow-purple-500/10 shadow-lg ${isImportant}`}
    >
      <CardHeader className="flex flex-col items-start">
        <h3 className="text-2xl font-Poppins capitalize font-bold underline decoration-2 decoration-purple-500">
          {title}
        </h3>
        <span className="text-zinc-500">- {autor}</span>
      </CardHeader>
      <Divider />
      <CardBody>
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a
              href={decoratedHref}
              key={key}
              style={{ color: "#0af" }}
            >
              {decoratedText}
            </a>
          )}
        >
          {content}
        </Linkify>
      </CardBody>
      <CardFooter>
        <Button
          isLoading={loading}
          spinner={
            <svg
              className="animate-spin h-5 w-5 text-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          }
          color="danger"
          variant="ghost"
          onClick={handleDelete}
        >
          Borrar
        </Button>
      </CardFooter>
    </Card>
    </Link>
  );
}
