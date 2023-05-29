import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx(styles.homeContainer)}>
        <h1 className={clsx("hero__title", styles.heroTitle)}>{siteConfig.title}</h1>
        <p>
          Welcome!  Arthera is a Layer 1 DAG blockchain solution integrating seamless scalability, EVM compatibility, and a proof-of-stake consensus model.
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
