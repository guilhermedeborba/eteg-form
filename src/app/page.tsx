'use client'
import ProfileForm from '@/components/ProfileForm'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12 ">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg shadow-md">
            <div
              className="w-full h-auto hidden lg:block lg:w-5/12 bg-contain p-8 bg-origin-content bg-no-repeat bg-center bg-gray-200 rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://www.eteg.com.br/wp-content/uploads/2023/05/Logo_Eteg_RGB_azul-1.png')",
              }}
            />
            <ProfileForm />
          </div>
        </div>
      </div>
    </main>
  )
}
