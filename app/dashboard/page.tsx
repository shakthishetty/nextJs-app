import BlogPost from "@/components/BlogPost";
import { buttonVariants } from "@/components/ui/button";
import type { BlogPost as BlogPostType } from "@/lib/generated/prisma"; // ✅ Correct path here
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";

// Type the return value correctly
async function getData(userId: string): Promise<BlogPostType[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    return <div>User not found.</div>;
  }

  const data = await getData(user.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: BlogPostType) => (
          <BlogPost data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
