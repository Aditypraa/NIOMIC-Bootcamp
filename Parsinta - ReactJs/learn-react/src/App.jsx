import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";

export default function App() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      <div className="flex gap-x-2">
        <Button
          className="bg-blue-600"
          onClick={() => console.log("Register")}
          type="button"
        >
          <IconBrandFacebook />
          Register
        </Button>

        <Button
          className="bg-pink-600"
          onClick={() => console.log("Login")}
          type="submit"
        >
          <IconBrandTwitter />
          Login
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { children, text, className = "bg-pink-600" } = props;
  return (
    <button
      {...props}
      className={`[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 ${className} text-white px-4 py-2 rounded`}
    >
      {text || children}
    </button>
  );
}
