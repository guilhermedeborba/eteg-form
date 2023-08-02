import { Profile } from '@prisma/client'
import cx from 'classnames'
import { ChangeEvent } from 'react'
import { IMaskInput } from 'react-imask'
import ColorSelector from '@/components/ColorSelector'
import { useForm } from 'react-hook-form'
import useProfileUpdate from '@/hooks/useProfileUpdate'

export default function ProfileForm() {
  const { handleSubmit, register, setValue, formState } = useForm<Profile>({ mode: 'onChange' })
  const { error, loading, success, updateProfile } = useProfileUpdate()

  if (success) {
    return (
      <div className="flex items-center justify-center w-full min-h-[500px]">
        <div>
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Obrigado!</h1>
            <p>Seu perfil foi compartilhado com Eteg.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full lg:w-7/12 p-5 rounded-lg lg:rounded-l-none">
      <h3 className="pt-4 text-2xl text-center">Criar Perfil</h3>
      <form onSubmit={handleSubmit(updateProfile)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
        <div className="mb-4 md:flex md:justify-between">
          <div className="w-full mb-4 md:mr-2 md:mb-0">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fullName">
              Nome Completo
            </label>
            <input
              {...register('fullName', { required: true })}
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Nome Completo"
            />
          </div>
          <div className="w-full mb-4 md:mr-2 md:mb-0">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cpf">
              CPF
            </label>
            <IMaskInput
              onChange={(e: ChangeEvent<HTMLInputElement>) => setValue('cpf', e.target.value)}
              name="cpf"
              id="cpf"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              mask="000.000.000-00"
              placeholder="Digite o seu CPF"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            {...register('email', { required: true })}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="b-4 md:mr-2 md:mb-0">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="color">
              Cor
            </label>
            <ColorSelector onChange={(color) => setValue('color', color)} />
          </div>
        </div>
        <div className="mb-6 text-center">
          {error && <p className="text-red-500">{error}</p>}
          <button
            disabled={!formState.isValid}
            className={cx(
              'w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline',
              {
                'animate-pulse': loading,
              },
            )}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  )
}
