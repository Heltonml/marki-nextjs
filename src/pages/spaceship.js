import styles from '../../styles/Home.module.css';
import getSpaceship from './api/getSpaceship';

const Spaceship = ({ spaceship, error }) => {
    if (error) {
        <div>An error occured: {error.message}</div>
    }
    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Spaceship is <a href={spaceship.image} target="_blank">{spaceship.name}</a>
                    </h1>

                    <p className={styles.description}>
                        The Star Ship Class {' '}
                        <code className={styles.code}>{spaceship.starship_class}</code>
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Model &rarr;</h2>
                            <p>{spaceship.model}</p>
                        </div>

                        <div className={styles.card}>
                            <h2>Manufacturer &rarr;</h2>
                            <p>{spaceship.manufacturer}</p>
                        </div>

                        <div className={styles.card}>
                            <h2>Pilots &rarr;</h2>
                            <p>{spaceship.pilots.map(pilot => (
                                <li><a href={pilot}>
                                    {pilot}
                                </a></li>
                            ))}</p>
                        </div>

                        <div className={styles.card}>
                            <h2>Cost in credits &rarr;</h2>
                            <p>
                                {spaceship.cost_in_credits}
                            </p>
                        </div>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <a href="https://hml-intelligence.com" target="_blank" rel="noopener noreferrer">
                        Powered by{' '}
                        <span className={styles.logo}>
                            HML - Intelligence
                        </span>
                    </a>
                </footer>
            </div>
        </>
    );
};

Spaceship.getInitialProps = getSpaceship;

export default Spaceship;
