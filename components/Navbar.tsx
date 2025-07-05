import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { buttonVariants } from "./ui/button";




const Navbar = async() => {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  return (
   <nav className="py-5 px-5 flex items-center justify-between">
     <div className="flex items-center gap-10">
        <Link href="/">
        <h1 className="text-3xl font-semibold">BLOG <span className="text-blue-500">Shakthi</span></h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-500 transition-colors">Home</Link>
           <Link href="/dashboard" className="text-sm font-medium hover:text-blue-500 transition-colors">Dashboard</Link>
            <Link href="/About" className="text-sm font-medium hover:text-blue-500 transition-colors">About</Link>
             <Link href="/Project" className="text-sm font-medium hover:text-blue-500 transition-colors">Project</Link>
        </div>
     </div>

     {user ? (
      <div className="flex items-center gap-4">
        <p>{user.given_name}</p>
        <LogoutLink className={buttonVariants({variant: "secondary"})}>Logout</LogoutLink>
      </div>
     ):(
      <div className="flex items-center gap-4">
         <LoginLink  className={buttonVariants({variant: "blue"})}>Login</LoginLink>
            <RegisterLink className={buttonVariants({variant:"secondary"})}>Sign up</RegisterLink>
     </div>
     )}
   </nav>
  )
}

export default Navbar