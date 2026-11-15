export default function Entry() {
    return (
        <article className="entry">

            <img
                src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=500&q=80"
                alt="Mount Fuji"
                className="entry-image"
            />

            <div className="entry-content">

                <div className="location">
                    <span className="pin">📍</span>
                    <span className="country">JAPAN</span>

                    <a
                        href="https://www.google.com/maps/search/Mount+Fuji"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Google Maps
                    </a>
                </div>

                <h2>Mount Fuji</h2>

                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>

                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and
                    foreign tourists.
                </p>

            </div>

        </article>
    );
}