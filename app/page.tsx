import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to the Learning Platform
          </h2>
        </div>
        <div className="rounded-md shadow">
          <div className="py-5 px-4 space-y-4">
            <a href="/courses" className="text-lg leading-6 font-medium text-gray-900">
              Explore our courses to enhance your skills.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}