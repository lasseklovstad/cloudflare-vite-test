import {
  json,
  type LoaderFunctionArgs
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";


export async function loader({ context }: LoaderFunctionArgs) {
  console.log(context)
  const { AUTH0_SECRET } = context.env;
  const value = AUTH0_SECRET
  const processValue = process.env
  return json({ value, processValue });
}

export default function Index() {
  const { value, processValue } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Welcome to Remix</h1>
      {value}
      {JSON.stringify(processValue)}
    </div>
  );
}
