import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <p>
          This documentation will help you migrate, develop applications for the Arthera blockchain, run nodes, adapt your business model and participate in the first sustainable WEB3 ecosystem.
          Here you will find descriptive concepts, how-to guides, tutorials, API references, code examples, release notes, and more.
        </p>
      </div>

      <div className={styles.feature}>
        <h1>Arthera testnet is live</h1>
        <p>You can check it out using the <Link href="https://explorer-test.arthera.net">Explorer</Link></p>
      </div>

      <div className={styles.feature}>
        <h1>Arthera Wallet</h1>
        <p>It’s right here. Use it to play around with our subscriptions and to check out our partner dApps, for now.</p>
        <Link href="/learn/arthera-wallet">Here is a detailed guide</Link>
      </div>

      <div className={styles.feature}>
        <h1>Get started</h1>
      </div>

      <div className={styles.feature}>
        <div className={styles.cardContainer}>
          <div className="row">
            <div className={clsx('col col--4')}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <Link className={styles.cardTitle} href="/learn/intro"><h2>Learn everything about Arthera</h2></Link>
                  <p className={styles.cardText}>Learn the key concepts of the Arthera Protocol, like subscriptions, transactions, accounts, gas and transaction fees, nodes, and more</p>
                </div>
              </div>
            </div>

            <div className={clsx('col col--4')}>
              <div className={styles.card}>
                <div className={styles.cardBody}>
                  <Link className={styles.cardTitle} href="/build/intro"><h2>Develop or Migrate your contracts</h2></Link>
                  <p className={styles.cardText}>Everything you need to know about building and deploying contracts on the Arthera blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feature}>
        <h1>Become a Validator</h1>
        <p>Install and run a validator node on your local testnet. <Link href="/validators/getting-started">Here is the tutorial</Link></p>
      </div>

      <div className={styles.feature}>
        <h1>Join the Arthera ecosystem</h1>
        <p>In order to properly organise your onboarding please <Link href="https://forms.gle/dKQsUK3L7JW8dN4Y6">complete this form</Link>. The more accurate your answers – the better we can settle you in.</p>
      </div>

      <div className={styles.feature}>
        <h1>Find out more</h1>
        <p>Find out more about us and exchange ideas by joining the <Link href="https://t.me/+u9C3H9GYL1Y2N2I0">Builder Telegram group</Link> (invite only) or by following our <Link href="https://twitter.com/artherachain">Twitter page</Link>. </p>
      </div>
    </section>
  );
}
