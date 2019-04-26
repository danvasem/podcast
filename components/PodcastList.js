import Link from "next/link";

export default class PodcstList extends React.Component {
  render() {
    return (
      <div>
        <h2>Últimos podcasts</h2>
        {this.props.audioClips.map(clip => (
          <Link href={`podcast?id=${clip.id}`}>
            <a>
              <div> {clip.title} </div>
            </a>
          </Link>
        ))}
        <style jsx>{`
          h2 {
            padding: 5px;
            font-size: 1.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
            color: blue;
          }
        `}</style>
      </div>
    );
  }
}
