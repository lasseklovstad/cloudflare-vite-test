import {
  json,
  type LoaderFunctionArgs
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";


export async function loader({ context }: LoaderFunctionArgs) {
  console.log(context)
  const { AUTH0_SECRET } = context.env;
  const value = AUTH0_SECRET
  return json({ value });
}

export default function Index() {
  const { value } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Welcome to Remix</h1>
      {value}
    </div>
  );
}
