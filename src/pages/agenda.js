import Layout from "../components/layout";
import React from "react";
import Talk from "../components/Schedule/Talk";
import Slot from "../components/Schedule/Slot";
import Break from "../components/Schedule/Break";
import {graphql} from "gatsby";
import Img from "gatsby-image";

class Agenda extends React.Component {
    render() {
        const mobileImageStyle = {
            marginTop: "1rem",
            width: "6rem",
        };
        const sponsorsProfessionalLinks = [
            { linkTo: "https://www.microsoft.com/fr-fr/" },
            { linkTo: "https://aws.amazon.com/fr/" },
            { linkTo: "https://www.claranet.fr" }
        ];
        const listSponsorsProfessionalMobile = this.props.data.sponsorsProfessionalLogosMobile.edges.map(
            (o, i) => Object.assign({}, o, sponsorsProfessionalLinks[i])
        );
        const listSponsorsProfessionalMobileToDisplay = listSponsorsProfessionalMobile.map(
            edge => (
                <div className="col-3" style={mobileImageStyle}>
                    <a href={edge.linkTo}>
                        <Img fluid={edge.node.childImageSharp.fluid} />
                    </a>
                </div>
            )
        );
        return (
            <Layout displayHeader="false">
                <div className="grid-wrapper">
                    <div className="col-12">
                        <section id="agenda" className="main style1">
                            <span><strong>Nos sponsors professional :</strong></span>
                            <div className="sponsors-pro">
                                {listSponsorsProfessionalMobileToDisplay}
                            </div>
                            <p>Tous nos sponsors et partenaires sont visibles <a href="/sponsors">ici</a>.</p>
                            <table>
                                <tbody>
                                <tr>
                                    <Slot hour="09:00"/>
                                    <Talk colSize="4" color="stage-orga" subject="Café avec l'orga ☕" duration="15min"
                                          room="Salle 1"/>
                                </tr>
                                <tr>
                                    <Slot hour="09:15"/>
                                    <Talk colSize="4" color="stage-orga" subject="Keynote - Comment être un bon citoyen du Cloud ?" duration="30min"
                                          room="Salle 1"/>
                                </tr>
                                <tr>
                                    <Slot hour="09:45"/>
                                    <Talk subject="Et si ca tourne mal ? Recettes pour des applications résilientes"
                                          speaker="Christopher Maneu"
                                          company = "@Microsoft"
                                          duration="45min" room="Salle 1" category="Cloud Native"
                                          description="Quel est le rapport entre la plongée sous-marine et des applications cloud-natives ? A priori, pas grand chose. Pourtant, lors que vous vous trouvez à 80 mètres de profondeur, vous devez mettre en place des outils et des techniques pour assurer une résilience absolue. Ces mêmes techniques peuvent s'appliquer à l'architecture et au développement d'applications résiliences. Durant cette présentation, nous verrons tout d'abord une philosophie à adopter dans votre conception d'applications résilientes. Puis nous verrons un ensemble de techniques à avoir à l'esprit et comment les appliquer concrètement dans vos applications."
                                    />
                                    <Talk subject="FinOps : et si on arrêtait de balancer l'argent par les fenêtres ?"
                                          speaker="Laurent Grangeau & Olivier Dupré & Tony Jarriault"
                                          company="@Sogeti"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"
                                          description="Consommer les services d'un clouder est très simple. Payer beaucoup trop cher aussi. Malgré la promesse d'un cloud à faible coût, il faut avoir une attitude FinOps si on en veut pas voir la facture exploser. Notre objectif est de vous proposer des pistes d'optimisations des coûts sur vos clouds, publiques comme privés. On vous présentera une approche organisationnelle avant de mettre les mains dans le code et vous montrer 2 cas très concrets sur GCP et AWS."
                                    />
                                    <Talk subject="Les bonnes pratiques de sécurité pour les applications Serverless"
                                          speaker="Steve Houel"
                                          company="@AWS"
                                          duration="45min" room="Salle 3" category="Observabilité"
                                          description="Pour créer et déployer en toute sécurité des applications Serverless, il faut appliquer les meilleures pratiques en matière de sécurité dans le Cloud. Dans cette présentation, vous apprendrez comment configurer votre fonction AWS Lambda et comment mettre en place facilement un système d'authentification et d'autorisation pour Amazon API Gateway. Nous aborderons également la manière dont vous pouvez utiliser Amazon Cognito pour l'authentification et l'autorisation de vos utilisateurs finaux. Vous apprendrez également comment stocker en toute sécurité les secrets de vos applications avec AWS. Cet présentation aborde également la manière de mettre en œuvre les meilleures pratiques de gestion des identités et des accès."
                                    />
                                    <Talk rowSize="3"
                                          subject="Istio ⛵ par la pratique !"
                                          speaker="Kevin Davin & Nikola Lohinski"
                                          company="@Stack Labs"
                                          duration="2h" room="Salle 4" category="Cloud Native"
                                          description="<p>Dans un monde distribué, nous sommes confrontés à de nouveaux problèmes. Les notions de circuit-breaker, de retry, de timeout, de blue-green deployment, A/B testing, pool-ejection… viennent remplacer nos anciens problèmes de monolithe 🙁.</p><p>Istio ⛵ est là pour nous aider sur tous ces points... et même plus ! 🥰</p><p>Nous allons utiliser <strong>Istio on GKE</strong> sur Google Cloud Platform et découvrir ensemble tout ce que nous pouvons faire pour nos petites applications. Si le <strong>traffic mirroring</strong>, <strong>Canary Release</strong>, <strong>Traffic splitting</strong> ne vous font pas peur, nous pourrons mettre cela en place très facilement ! Nous irons même jusqu'à injecter des erreurs dans notre système #ModeChaos 💥.</p><p>Nous profiterons aussi des outils offerts par GCP pour suivre les comportements et performances de nos applications en live ❤️.</p>"
                                    />
                                </tr>
                                <tr>
                                    <Slot hour=""/>
                                    <Break colSize="3" text="Pause"/>
                                </tr>
                                <tr>
                                    <Slot hour="10:55"/>
                                    <Talk subject="9 questions que vous devriez vous poser sur vos applications Serverless"
                                          speaker="François Bouteruche"
                                          company="@AWS"
                                          duration="45min" room="Salle 1" category="Cloud Native"
                                          description=" En 2014, AWS a initié le domaine de l’informatique Serverless orientée événements avec le lancement d’AWS Lambda. Lambda permet aux développeurs d’exécuter leur code sans avoir à provisionner de serveurs, sans se soucier de la mise à l’échelle, des mises à jour d’OS et sans se soucier de leur gestion. Cela a engendré l’émergence d’un nouveau paradigme, l’informatique Serverless, qui correspond a un nouveau modèle d’exécution où le fournisseur Cloud gère les serveurs et alloue dynamiquement les ressources. La tarification est basée sur la quantité de ressources consommées par l’application plutôt que par une quantité pré-définie. De plus, la disponibilité et la tolérance aux pannes font parties intégrantes du service. Ce paradigme s’applique aussi aux services de stockage tels que S3, aux bases de données telles que DynamoDB ou Aurora Serverless ou encore aux conteneurs avec Fargate. Une application Serverless est une application dont l’exécution va intégralement se reposer sur l’utilisation de ces services.<br/>Avec des centaines de milliers de clients qui utilisent Lambda comme Bonduelle, Euler Hermes ou Aramis Auto, nous avons consolidé les bonnes pratiques de développement d’applications Serverless et nous les avons mises à à disposition de la communauté des développeurs à travers le Well-Architected Framework pour les applications Serverless. Il définit un ensemble de 9 questions couvrant l’excellence opérationnelle, la sécurité, la fiabilité, la performance et les coûts. Dans cette session, nous présentons ces 9 questions et comment elles peuvent vous guider dans la conception de votre application Serverless quelque soit le fournisseur de Cloud que vous utilisez."
                                    />
                                    <Talk subject="Du DevOps multi Cloud avec Kubernetes et Terraform"
                                          speaker="Thomas Rannou"
                                          company="@Sopra Steria"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"
                                          description="Mise en oeuvre, à partir d'un projet .Net Core et de script Terraform, d'un pipeline d'intégration et déploiement continu avec Azure DevOps pour déployer une application dans un cluster Kubernetes sur Azure, AWS et GCP."
                                    />
                                    <Talk subject="Rex : Transfo Cloud Nexity - Log Factory Datadog : One tool to rule them all"
                                          speaker="Anthony Durot & Xavier Top"
                                          company="@Ippon & @Nexity"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="<p>Vous avez des difficultés avec la gestion des logs dans votre entreprise : plusieurs outils différents pas toujours maintenus ni utilisés, un accès aux logs difficile ou aléatoire ? Vos équipes s’arrachent les cheveux pour résoudre les incidents ? Alors ce retour d’expérience est fait pour vous !</p><p>Nous allons voir ensemble comment nous avons répondu à ces problématiques en bâtissant une solution de collecte et de gestion des logs à l’aide de Datadog chez un client. Dans un premier temps nous allons définir le contexte de notre client d’étude. Puis nous aborderons les briques fondamentales de Datadog et comment nous les avons mobilisées pour construire une architecture de management de logs moderne. Enfin, nous verrons l’automatisation que nous avons mise en place pour simplifier l’adoption en autonomie de Datadog par les équipes. </p>"      
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="11:50"/>
                                    <Talk subject="Introduction à AWS : son Histoire, son Leadership, ses Clients, ses Services"
                                          speaker="Olivier Lemaitre"
                                          duration="20min" room="Salle 1" category="Cloud Native"
                                          description="Comment Amazon est devenu un fournisseur cloud computing ? Pourquoi est-il toujours le numéro un dans ce secteur ? Qui sont ses clients et quels avantages en tirent-ils ? Quels sont ses services phares ? Cette introduction est faites pour les personnes qui se posent des questions sur AWS, qui veulent découvrir cette plateforme ou simplement savoir si elle peut être adaptée à leur contexte."
                                    />
                                    <Talk subject="Kubernetes enfin ultra simple & léger avec K3S"
                                          speaker="Sébastien Moreno"
                                          company="@Ippon"
                                          duration="20min" room="Salle 2" category="Orchestration"
                                          description="L'installation d'un cluster Kubernetes a longtemps été une tâche lourde pour l'Ops ou le Dev. Mais on arrive maintenant dans une ère de maturité dans les distributions Kubernetes, avec notamment Rancher, Openshift... mais aussi les installeurs du cloud comme EKS de AWS. Ici je propose d'explorer dans un Quickie une autre distribution issue de Rancher, ultra-légère, ultra simple, prête pour la prod et l'IOT. K3S débarrasse Kubernetes de sa complexité de ses plugins superflus et change Kubernetes en simple binaire à lancer sur vos machines. Au programme: explication de ce que ça cache sous le capot et de la démo !"
                                    />
                                    <Talk subject="Cloud Souverain, par où commencer ?"
                                          speaker="Christophe Chaudier"
                                          company="@Lydra 'Les Compagnons du DevOps'"
                                          duration="20min" room="Salle 3" category="Cloud Native"
                                          description="C’est quoi la Souveraineté Numérique et pourquoi je devrais m’y intéresser ?<br/>Ok je suis convaincu mais comment je fais maintenant ?<br/>C’est quoi les clouds « souverains » ?</br>Il y en a en France ?"
                                    />
                                    <Talk subject="Démystifier GitOps"
                                          speaker="Mohamed Chaaben"
                                          company="@Revolve"
                                          duration="20min" room="Salle 4" category="DevOps & SRE"
                                          description="GitOps est un workflow qui permet d'optimiser, fluidifier et sécuriser les mises en production grâce à un système de gestion de versions. Depuis son apparition en 2017 via un article de blog dans le site de Weave works, cette méthode commence à devenir de plus en plus populaire. GitOps est synonyme de “opérations by pull request”. Mais qu'est-ce qu'il se cache vraiment derrière ce terme et pourquoi faut-il envisager d’appliquer cette méthode dans vos projets? Durant ce talk, nous allons démystifier le workflow GitOps et passer en revue les modèles d'implémentation. Le présentation se termine avec une démo de mise en place."
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="12:15"/>
                                    <Talk colSize="4" color="stage-orga"
                                          subject="Cloud Guru, DevSecOps, SRE, SysOps, Cloud Builder, DevOps, Triceratops…. Finalement c’est quoi les métiers du cloud en 2020 ?"
                                          duration="1h30"
                                          category="Table ronde"
                                          speaker="We Love Devs & Sponsors"
                                          description="L’occasion de comprendre ce que sont les métiers du Cloud en 2020, comment recruter, faire évoluer et animer ses équipes pour construire son organisation de demain."
                                          room="Salle 1"/>
                                </tr>
                                <tr>
                                    <Slot hour="13:45"/>
                                    <Talk subject="Les opérateurs Kubernetes : opérer des services Cloud Native à grande échelle"
                                          speaker="Horacio Gonzalez"
                                          company = "@OVH"
                                          duration="45min" room="Salle 1" category="Cloud Native"
                                          description="<p>Les opérateurs sont des extensions de Kubernetes qui simplifient l'installation et la gestion des applications en tirant parti des ressources personnalisées de gestion des applications.</p><p>Le modèle d'opérateur Kubernetes tente d'émuler le rôle d'un opérateur humain, qui utilise sa connaissance approfondie de l'application pour l'installer, l'exploiter et la déboguer. Les opérateurs Kubernetes cherchent à automatiser ces tâches et à faciliter l'ensemble du cycle de vie de l'application.</p><p>Dans cette présentation, nous expliquerons comment nous utilisons les opérateurs Kubernetes chez OVHcloud et comment ils nous aident à exploiter notre service Kubernetes managé à grande échelle.</p><p>Nous illustrerons les discussions avec trois exemples concrets: l'opérateur Harbor, l'opérateur LoadBalancing et notre nouveau opérateur NodePool.</p>"
                                    />
                                    <Talk subject="Rex : Datadog from Rake to CNAB, an history of deploy tools"
                                          speaker="Pierre Baillet"
                                          company="@Datadog"
                                          duration="45min" room="Salle 2" category="REX"
                                          description="<p>Venez écouter l'histoire des outils de déploiements chez Datadog, leurs réussites, leurs échecs et avoir une idée de ce qui se fait ailleurs et qui marche (ou pas) ! </p><p>De Rake aux Bundles d'Application Cloud Native, Datadog a dû adapter ses outils de build, de tests et déploiements pour suivre sa croissance rapide et son déploiement d'un Datacenter à plusieurs Clouds et plusieurs régions. Technos utilisées, problèmes rencontrés et espoirs d'avenir, cette présentation présente le chemin parcouru pendant quelques années pour rendre la vie plus facile aux développeurs et augmenter la fiabilité de la plateforme.</p><p>Un plan sommaire&nbsp;:</p><ul><li>L'état des lieux (10 minutes)<ul><li>le speaker</li><li>Datadog</li><li>l'infra en 2017</li><li>les outils utilisés pour déployer</li></ul></li><li>de 5k à 20k nodes, passage à l'échelle de la plateforme et nouveaux besoins (5 minutes)</li><li>le passage au multi-clouds: de nouveaux outils, de nouveaux problèmes (10 minutes)</li><li>multi-region, multi-clouds, l'émergence des CNAB (10 minutes)</li><li>GovCloud et les environnements très contrôlés, de nouvelles contraintes à intégrer rapidement dans nos outils (5 minutes)</li><li>Conclusion et FAQ (5 minutes)</li></ul><p>Mot-clés: Rake, Capistrano, Gitlab, Kubernetes, CNAB, AWS, GCP, GovCloud, Audit, Change Management, Large scale</p>"
                                    />
                                    <Talk subject="Rex : Tencent Cloud - Multicloud performant entre Europe ET Asie: level UP!"
                                          speaker="Gilles Closset & Tudor Toma"
                                          company="@Tencent Cloud"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="Les écosystèmes technologiques Européens et Asiatiques sont deux mondes bien différents. Pour vos déploiements cross-régionaux quoi de plus logique que d'utiliser le meilleur des deux mondes? Découvrez les secrets de Tencent Cloud pour innover et délivrer vos projets aux quatre coins du monde. REX dans le domaine du jeu vidéo."
                                    />
                                    <Talk rowSize="3"
                                          subject="Hands On : Les mains dans le serverless de Google Cloud"
                                          speaker="Guillaume Laforge"
                                          company="@Google"
                                          duration="2h" room="Salle 4" category="Cloud Native"
                                          description="Dans cet atelier, vous allez construire une application de partage de photos, en utilisant les technologies serverless de Google Cloud, dont Cloud Functions, App Engine et Cloud Run. Chemin faisant, vous mettrez à profit Pub/Sub pour faire communiquer vos micro-services, la base de données nosql Firestore pour stocker les informations de métadonnées des photos, cloud storage pour stocker les fichiers eux-mêmes, cloud scheduler pour faire tourner des services à un moment prédéfini. Vous saupoudrerez également l'un de vos services avec du machine learning, afin de labelliser vos photos automatiquement. L'atelier est composé de plusieurs modules, pour construire les différents services dont vous aurez besoin au fur et à mesure."
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="14:40"/>
                                    <Talk subject="Optimiser son déploiement Spring Boot dans le cloud"
                                          speaker="Julien Dubois"
                                          company="@Microsoft"
                                          duration="45min" room="Salle 1" category="DevOps & SRE"
                                          description="<p>Azure propose de nombreuses librairies et outils destinés aux utilisateurs de Spring Boot, permettant de déployer leurs applications dans le cloud de manière plus simple et plus efficace. Nous verrons dans cette session:</p><ul><li>Les options de déploiement: VM, Azure App Service, Azure Kubernetes Service, Azure Functions, Azure Spring Cloud...</li><li>Les starters Spring Boot disponibles</li><li>Azure Devops et GitHub Actions pour test et déployer</li><li>Le monitoring avec Azure Monitor</li><li>De nombreuses astuces pour optimiser sa production</li></ul>"
                                    />
                                    <Talk subject="SRE, où comment on laisse la Prod voyager de ses propres ailes"
                                          speaker="Sylvain Nieuwlandt"
                                          company="@Sfeir"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"
                                          description="<p>Avoir un mini-infarctus en voyant une page blanche à la place de la Prod ? Faire une checklist de lancement nucléaire au moment de devoir faire une Mise en Prod ? Avoir ce mélange d'adrénaline et de désespoir dès que la sonnerie du téléphone d'astreinte se fait entendre ?</p><p>Si vous aussi vous connaissez trop bien ces sensations, venez découvrir le SRE, cette magie qui nous a permis de ne plus craindre les déploiements. Mieux même, vous verrez comment cela nous a permis de ne plus nous occuper de la Prod et de la laisser se réparer d'elle-même !</p>"
                                    />
                                    <Talk subject="Rex : Leroy Merlin, Make k8s deployments easy again with Turbine"
                                          speaker="Guillaume Desmidt & Nicolas Lassalle"
                                          company="@Leroy Merlin France & @Zenika"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="<p>T’en a marre d’écrire du YAML ? Turbine est un outil de CD qui permet de déployer facilement des applications dans des clusters kubernetes.</p><p>À la base développé pour le Web de Leroy Merlin france, Turbine est aujourd'hui devenu un produit groupe qui pilote plus d’un millier de déploiements par jour.</p><p>Cette présentation sera l'occasion de vous présenter l'outil, son architecture mais aussi les clés de son succès.</p><p>Turbine est un outil développé en golang et basé sur helm. Son UI lui permet d'être utilisé par le plus grand nombre (développeurs, PO, scrum, RUN, managers) tandis que son moteur de provisioning avancé adresse quant à lui un public plus ops / devops.</p><p>Créé par une équipe de déjantés, les méthodes de travail utilisées sont à leur image.</p>"
                                    />
                                </tr>
                                <tr>
                                    <Slot hour=""/>
                                    <Break colSize="3" text="Pause"/>
                                </tr>
                                <tr>
                                    <Slot hour="15:45"/>
                                    <Talk subject="Github Actions : enfin des pipelines accessibles aux développeurs"
                                          speaker="Antoine Meausoone"
                                          company = "@Sfeir"
                                          duration="45min" room="Salle 1" category="DevOps & SRE"
                                          description="<p>Avez-vous eu déjà été frustré d’avoir des pipelines illisibles, remplies de code bash difficile à lire, et à maintenir ? Ou en tant que développeur, avoir voulu corriger ou ajouter une fonctionnalité dans votre pipeline, et être rebuté face à la complexité du code ? </p><p>Github vient à la rescousse avec Github Actions, leur offre de CICD. Nous allons voir ensemble quels sont les avantages de Github Actions et ses caractéristiques.Comment il va devenir plus facile de faire évoluer vos pipelines, et pourquoi les pipelines ne seront plus la chasse gardée des DevOps.</p><p>On va voir donc comment écrire des pipelines, quelle est la logique ? Comment intégrer des Github Actions, et également comment en écrire !</p><p>Nous allons également découvrir ses faiblesses, et notamment les problématiques de sécurité (et comment y remédier).</p>"      
                                    />
                                    <Talk subject="La prod de vos applis Serverless"
                                          speaker="Alexis Moussine-Pouchkine"
                                          company="@Google"
                                          duration="45min" room="Salle 2" category="Cloud Native"
                                          description="Serverless c'est le nirvana pour les devs: pas de serveur, pas de cluster, juste un infra qui s'adapte à la demande. Mais alors a-t-on même besoin de gérer la prod? Comment savoir si le service est bien délivré? Cette session déclinera les bonnes pratiques DevOps/SRE au serverless pour impliquer dev et prod autour d'un objectif commun et pragmatique à l'aide d'outils. Venez voir si le nirvana est possible pour les prods comme pour les devs! Demo incluse."
                                    />
                                    <Talk subject="Rex : Le modèle Prismea pour lancer sa Fintech sur AWS"
                                          speaker="Samuel Bailly & Clément Vessella"
                                          company="@Ippon"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="<p>Pour Prismea, la nouvelle néo-banque pour les PME/PMI, AWS est une source immense de valeur et d’innovations car ce ne sont pas les technologies seules qui sont importantes mais la composition qu’on en fait pour servir les besoins clients. </p><p>Prismea a pu lancer son projet en seulement 9 mois . Vous pouvez consulter le webinaire sur cette expérience: <a href='https://fr.ippon.tech/webinaire-prismea-fintech-avec-aws/'>https://fr.ippon.tech/webinaire-prismea-fintech-avec-aws/</a></p><p>Nous vous proposons une immersion technique dans le contexte d'une finTech avec nos retours d'expériences avec l'approche Cloud et DevOps Prismea</p><p>Comment le déploient continue a permit de développer sur AWS en 9 mois la néo-banque des pro ? Comment  l'organisation Prismea à rendu technologiquement et humainement cela possible ?</p><p>Nous répondrons à tout ces points lors de ce REX animé par les 2 architectes Cloud de Prismea.</p>"      
                                    />
                                    <Talk subject="Code Quality & SAST sont disponibles dans GitLab Core ... Et alors?"
                                          speaker="Philippe Charrière"
                                          company="@Gitlab"
                                          duration="45min" room="Salle 4" category="DevOps & SRE"
                                          description="<p>La fonctionnalité de &quot;Code Quality&quot; est passée dans &quot;GitLab Core&quot; il y a déjà un moment (elle permet d'effectuer des tests de qualité, comme exécuter des linters par exemple), et certains SAST Analyzers sont eux aussi passés  dans &quot;GitLab Core&quot; plus récemment  (ils permettent de détecter des vulnérabilités dans votre code).</p><p>Mais saviez vous que vous pouvez utiliser vos propres outils  à la place de ceux fournis par défaut?</p><p>Je vous expliquerai:</p><ul><li>Les fonctionnement de base</li><li>Comment  utiliser <strong>EsLint</strong> avec le <strong>Code Quality</strong> et afficher les résultats dans vos merge requests</li><li>Comment rechercher des 🦁 ou des 🐯 dans votre projet avec votre propre &quot;scanner SAST&quot; </li><li>Nous verrons ce que l'on peut faire des reports générés par SAST quand on est dans &quot;GitLab Core&quot; (l'affichage détaillé des vulnérabilités n'existant que dans une des version entreprise)</li></ul><p>Avec ça, vous repartirez avec une meilleure compréhension de ces 2 fonctionnalités, et les outils pour améliorer votre CI 🎉</p>"
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="16:40"/>
                                    <Talk subject="Je fais partie d'une espèce menacée d'extinction"
                                          speaker="Olivier Poncet"
                                          company = "@Suricats Consulting"
                                          duration="45min" room="Salle 1" category="REX"
                                          description="Dans ce talk, nous ne parlerons pas d'outils, de « geekeries » ou autres « nerderies » en tout genre. Nous aborderons le difficile sujet d’une espèce en voie d’extinction : les vieux ingénieurs de l'IT dont je fais partie. Je vais donc vous parler des vieux techs au travers de mon expérience, de l’évolution du marché ces 25 dernières années, du burn-out et de la remise en question qui s’ensuit."
                                    />
                                    <Talk subject="Créer une application Cloud Native avec Quarkus et Google Cloud Functions"
                                          speaker="Loïc Mathieu"
                                          company="@Zenika"
                                          duration="45min" room="Salle 2" category="Cloud Native"
                                          description="<p>Après une présentation rapide du framework Quarkus, je vais développer et déployer une application dans Google Cloud à base uniquement de fonctions, via les extensions Quarkus google-cloud-functions, google-cloud-functions-http et funqy-google-cloud-functions.</p><p>Cette application exposera une API REST et utilisera des fonctionnalités offerte par Google Cloud telle que Google Cloud Storage et Google Cloud Pub/Sub.</p>"
                                    />
                                    <Talk subject="Rex : Marketplace ADEO : Avec Gitops, arrête de bricoler ton cluster"
                                          speaker="Vincent Guardiola & Franck De Graeve & Maxime Tricqueneaux"
                                          company="@Adeo"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="<p>Si comme nous tu passes tes dimanches chez Leroy merlin, tu n’as peut être pas envie de bricoler pour manager ton cluster Kubernetes !</p><p>Alors comme nous, utilise Gitops !!!</p><p>Gitops repose sur la déclaration de notre infrastructure dans un repository Git comme source de vérité.</p><p>Nous avons choisi un ensemble d’outils (git, argoCD, kustomize..) , qui nous  permettent d'appliquer nos configurations, d’assurer une traçabilité de toutes les modifications apportées sur nos environnements et de garantir l'homogénéité de nos clusters.</p><p>Nous en profiterons pour vous faire un retour d'expérience sur la mise en place de l’infrastructure dédié à la marketplace européenne Leroy Merlin.</p>"
                                    />
                                    <Talk subject="Observability is More than Logs, Metrics & Traces"
                                          speaker="Philipp Krenn"
                                          company="@Elastic"
                                          duration="45min" room="Salle 4" category="Observabilité"
                                          description="You know the drill: DevOps is using tool(s) X. So obviously, observability can be solved by throwing some tools together as well; generally logs, metrics, and traces often called the pillars of observability.<br/>But observability is not a tool — it is a property of a system. Moving from many small blackboxes to a more holistic view of your system. It includes tools, but not exactly three distinct features (especially if your solution happens to support those). For example, if half your user base cannot access your service because of some bad DNS settings and external health checks are not part of your pillars, you are none the wiser.<br/>This is not (just) a rant, but a look at the actual value to be added and some approaches to it. Like turning your logs into richer events that align with your business. Which is not solved by fancy tools alone."
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="17:30"/>
                                    <Talk colSize="4" color="stage-orga"
                                          subject="On se dit quoi: Take away & Mot de la fin 🍻"
                                          room="Salle 1"/>
                                </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </Layout>
        );
    }
}
export const pageQuery = graphql`
    query AgendaQuery {
        sponsorsProfessionalLogosMobile: allFile(
            filter: {
                extension: { regex: "/(png|jpe?g)/" }
                relativePath: { regex: "/sponsors/professional/mobile/" }
            }
            sort: { fields: childImageSharp___resolutions___originalName, order: ASC }
        ) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

export default Agenda;
