import Head from "next/head";


// два варианта для загрузки страницы SSR ? SSG
// Серверный пререндер страницы или же статичная генерация страниц

// если это SSG - статика, то тоже два варианта
// 1 адрес страницы не динамичен, статичен (не[someId])
// тогда никаких функций next не испрользуем

// 2 контент страницы зависит от данных 
// как зависит? Если статика, то нужен запрос к базе данных чтобы взять контент
// тогда SSG здесь это использование функции getStaticProps, которая должна вернуть пропс для страницы вида
// {props: {myData: data}} ---> ({ myData })

// 2.1 контент страницы зависит от данных и страница динамична в своем роуте 
// someId.jsx
// нужно сформировать массив путей, для этого исп функция getStaticPaths
// которая должна ернуть массив путей следующего вида 
// [{ params: { paths } }]
// затем вы должны исп getStaticProps
// у которой есть аргумент params, который хранит обычно id этой страницы
// таким образом вы прлучаете и пути для next и пропсы для страницы

// 3 Динамика getServerSideProps
// исп когда данные изменяются
// 1 в аргументах объект контекста
// где доступен id страницы, который позволяет сделать запрос
// возвратное значение такое же как в getStaticProps
// props, redirect, notFound

export default function HomePage() {
  return (
    <>
      <Head>
        <title>It is home page</title>
      </Head>
      <main>
        <h1>Hello, HomePage</h1>
      </main>
    </>

  )
}

// DEPLOY

// 1. create-next-app my-next-app
// 2. в pacadge.json добавляем строчку в scripts " export: next export"
// 3. homepage добавляем " homepage: "
// 4. меняем next.config на next.config.mjs
// /** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   assetPrefix: isProd ? 'https://myRepoGitPage.io' : undefined,
//   reactStrictMode: true,
// }

// export default nextConfig;

// GITHUB
// 5. создаем папку .github и в ней папку workflows 