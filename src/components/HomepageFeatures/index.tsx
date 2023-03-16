import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    link: string,
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'What is Arthera ?',
        link: '/intro',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Arthera is not just a super-fast blockchain, it's a new concept of decentralized economy designed to
                bring blockchain technology closer to users and businesses across the world.
            </>
        ),
    },
    {
        title: 'Are you a typical user ?',
        link: '/user/intro',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Learn how to perform basic tasks in the Arthera Network like sending coins and tokens, purchasing a
                subscription and interact with DApps.
            </>
        ),
    },
    {
        title: 'Are you a developer ?',
        link: '/dapp/intro',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Develop, migrate and deploy you DApp on Arthera. Learn how to use our tools and services to create the
                next killer DApp in the new web economy.
            </>
        ),
    },
];

function Feature({title, link, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Link href={link}>
                    <Svg className={styles.featureSvg} role="img"/>
                </Link>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
