import type { NextPage } from "next";
import Head from "next/head";
import CodeSample from "../../components/CodeSample";

const BinarySearchPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Binary Search</title>
        <meta name="description" content="Binary Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CodeSample
          sample={{
            language: "elixir",
            code: `
    defmodule Hello do
        def say_hi(name) do
            IO.puts "Hello, #{name}!"
        end
    end
    `,
          }}
        />
      </main>
    </div>
  );
};

export default BinarySearchPage;
