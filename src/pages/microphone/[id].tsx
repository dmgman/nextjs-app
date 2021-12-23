import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Microphone } from '../../../model/Microphone';
import { openDB } from '../../db';
import React from 'react';

export type MicrophoneDetailProps = Microphone;

export default function MicrophoneDetail({
  id,
  brand,
  model,
  price,
  imageurl,
}: MicrophoneDetailProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading......I am sorry for the wait!!</div>;
  }

  return (
      <div>
        <div>{id}</div>
        <div>{brand}</div>
        <div>{model}</div>
        <div>{price}</div>
        <div>{imageurl}</div>
      </div>
  );
}

export const getStaticProps: GetStaticProps<MicrophoneDetailProps> = async (
  ctx
) => {
  const id = ctx.params.id as string;
  const db = await openDB();
  const microphone = await db
    .from('microphone')
    .select('*')
    .eq('id', id)
  const mic = microphone.data[0];
  console.log("->> "+ mic);
  // await new Promise(res => setTimeout(res, 5000));

  return {
    props: {
      "id": mic.id,
      "brand": mic.brand,
      "model": mic.model,
      "price": mic.price,
      "imageurl": mic.imageurl
    } ,
    revalidate: 3
  };
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const db = await openDB();
  const microphones = await db
    .from('microphone')
    .select('*')
    .limit(10)
  const mics = microphones.data
  const paths = mics.map((a) => {
    return { params: { id: a.id.toString() } };
  });

  return {
    fallback: true,
    paths,
  };
};
