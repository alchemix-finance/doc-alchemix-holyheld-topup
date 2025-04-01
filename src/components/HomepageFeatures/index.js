import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure Top-up',
    icon: '🔒',
    description: (
      <>
        Top up your Holyheld account securely with Alchemix's self-repaying loans.
      </>
    ),
  },
  {
    title: 'Automated Repayment',
    icon: '⚡',
    description: (
      <>
        Your loan repays itself over time through yield farming strategies.
      </>
    ),
  },
  {
    title: 'Instant Access',
    icon: '💰',
    description: (
      <>
        Get immediate access to your funds on Holyheld while your collateral generates yield in Alchemix vaults.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
