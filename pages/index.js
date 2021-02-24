import Head from 'next/head'
import LandingPage from '../components/LandingPage';
import LamanUtama from '../components/LamanUtama';
import MindMap from '../components/MindMap';

export default function Home() {
  return (
    <>
      <LandingPage />
      <LamanUtama />
      <MindMap />
    </>

  )
}