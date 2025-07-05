import BlogPost from "@/components/BlogPost"
import { buttonVariants } from "@/components/ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import { prisma } from "../utils/db"


const  getData = async(userId:string)=>{
     const data = await prisma.blogPost.findMany({
      where:{
        authorId:userId
      },
      orderBy:{
        createdAt:'desc'
      }
     })
     return data
}

const DashboardRoute = async() => {
    const {getUser} = getKindeServerSession()

    const  user = await getUser()
    if (!user) {
    throw new Error("User not authenticated")
}

    const data = await  getData(user.id);


    if(!user){
        return redirect("/api/auth/register")
    }
  return (
    <div>

  
    <div className="flex items-center justify-between mb-4 px-5">
          <h2 className="text-xl font-medium">Your Blog Articles</h2>

          <Link href='/dashboard/create' className={buttonVariants({variant:'blue'})}>
              Create Post
          </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {
                data.map((item)=>{
                  return <BlogPost  data={item} key={item.id}/>
                
                })
               }
    </div>
  </div>
   
  )
}

export default DashboardRoute