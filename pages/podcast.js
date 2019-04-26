import Layout from "../components/Layout";
import Head from "next/head";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    let idPodcast = query.id;
    let reqPodcast = await fetch(
      `https://api.audioboom.com/audio_clips/${idPodcast}.mp3`
    );
    let dataPodcast = await reqPodcast.json();
    console.log(dataPodcast);
    let podcast = dataPodcast.body.audio_clip;
    let title = dataPodcast.body.audio_clip.title;
    return { idPodcast, podcast, title };
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <h1>{this.props.idPodcast}</h1>
        <audio controls autoPlay={true}>
          <source src={this.props.podcast.urls.high_mp3} type="audio/mpeg" />
        </audio>
      </Layout>
    );
  }
}
