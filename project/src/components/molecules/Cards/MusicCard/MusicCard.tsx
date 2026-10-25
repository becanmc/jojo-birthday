import styles from "./MusicCard.module.css";

function MusicCard(){
    return(
        <iframe
            className={styles.embed}
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/track/5FbcIkgUDNt6mZdDVFwVyE?utm_source=generator&si=8a41b9ca7ca74158"
            title="Player do Spotify"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
        />
    );
}

export default MusicCard;