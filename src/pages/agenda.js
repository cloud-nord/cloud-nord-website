import Layout from "../components/layout";
import React from "react";
import Talk from "../components/Schedule/Talk";
import Slot from "../components/Schedule/Slot";
import Break from "../components/Schedule/Break";

class Agenda extends React.Component {
    render() {
        return (
            <Layout displayHeader="false">
                <div className="grid-wrapper">
                    <div className="col-12">
                        <section id="agenda" className="main style1">
                            <table>
                                <tbody>
                                <tr>
                                    <Slot hour="09:00"/>
                                    <Talk colSize="4" color="stage-orga" subject="Café avec l'orga ☕" duration="15min"
                                          room="Salle 1"/>
                                </tr>
                                <tr>
                                    <Slot hour="09:15"/>
                                    <Talk colSize="4" color="stage-orga" subject="Keynote" duration="30min"
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
                                          description="Dans un monde distribué, nous sommes confrontés à de nouveaux problèmes. Les notions de circuit-breaker, de retry, de timeout, de blue-green deployment, A/B testing, pool-ejection… viennent remplacer nos anciens problèmes de monolithe 🙁. Istio ⛵ est là pour nous aider sur tous ces points... et même plus ! 🥰 Nous allons utiliser Istio on GKE sur Google Cloud Platform et découvrir ensemble tout ce que nous pouvons faire pour nos petites applications. Si le traffic mirroring, Canary Release, Traffic splitting ne vous font pas peur, nous pourrons mettre cela en place très facilement ! Nous irons même jusqu'à injecter des erreurs dans notre système #ModeChaos 💥. Nous profiterons aussi des outils offerts par GCP pour suivre les comportements et performances de nos applications en live ❤️."
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="10:30"/>
                                    <Break colSize="3" text="Pause"/>
                                </tr>
                                <tr>
                                    <Slot hour="10:55"/>
                                    <Talk subject="9 questions que vous devriez vous poser sur vos applications Serverless"
                                          speaker="François Bouteruche"
                                          company="@AWS"
                                          duration="45min" room="Salle 1" category="Cloud Native"/>
                                    <Talk subject="Du DevOps multi Cloud avec Kubernetes et Terraform"
                                          speaker="Thomas Rannou"
                                          company="@Sopra Steria"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"
                                          description="Mise en oeuvre, à partir d'un projet .Net Core et de script Terraform, d'un pipeline d'intégration et déploiement continu avec Azure DevOps pour déployer une application dans un cluster Kubernetes sur Azure, AWS et GCP."
                                    />
                                    <Talk subject="REX : Comment créer une solution de log management à l’aide de Datadog ?"
                                          speaker="Anthony Durot & Xavier Top"
                                          company="@Ippon & @Nexity"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="Vous avez des difficultés avec la gestion des logs dans votre entreprise : plusieurs outils différents pas toujours maintenus ni utilisés, un accès aux logs difficile ou aléatoire ? Vos équipes s’arrachent les cheveux pour résoudre les incidents ? Alors ce retour d’expérience est fait pour vous ! Nous allons voir ensemble comment nous avons répondu à ces problématiques en bâtissant une solution de collecte et de gestion des logs à l’aide de Datadog chez un client. Dans un premier temps nous allons définir le contexte de notre client d’étude. Puis nous aborderons les briques fondamentales de Datadog et comment nous les avons mobilisées pour construire une architecture de management de logs moderne. Enfin, nous verrons l’automatisation que nous avons mise en place pour simplifier l’adoption en autonomie de Datadog par les équipes."
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="11:50"/>
                                    <Talk subject="Introduction à AWS : son Histoire, son Leadership, ses Clients, ses Services"
                                          speaker="Olivier Lemaitre"
                                          duration="15min" room="Salle 1" category="Cloud Native"
                                          description="Comment Amazon est devenu un fournisseur cloud computing ? Pourquoi est-il toujours le numéro un dans ce secteur ? Qui sont ses clients et quels avantages en tirent-ils ? Quels sont ses services phares ? Cette introduction est faites pour les personnes qui se posent des questions sur AWS, qui veulent découvrir cette plateforme ou simplement savoir si elle peut être adaptée à leur contexte."
                                    />
                                    <Talk subject="Kubernetes enfin ultra simple & léger avec K3S"
                                          speaker="Sébastien Moreno"
                                          company="@Ippon"
                                          duration="15min" room="Salle 2" category="Orchestration"
                                          description="L'installation d'un cluster Kubernetes a longtemps été une tâche lourde pour l'Ops ou le Dev. Mais on arrive maintenant dans une ère de maturité dans les distributions Kubernetes, avec notamment Rancher, Openshift... mais aussi les installeurs du cloud comme EKS de AWS. Ici je propose d'explorer dans un Quickie une autre distribution issue de Rancher, ultra-légère, ultra simple, prête pour la prod et l'IOT. K3S débarrasse Kubernetes de sa complexité de ses plugins superflus et change Kubernetes en simple binaire à lancer sur vos machines. Au programme: explication de ce que ça cache sous le capot et de la démo !"
                                    />
                                    <Talk subject="Cloud Souverain, par où commencer ?"
                                          speaker="Christophe Chaudier"
                                          company="@Youtube 'Les Compagnons du DevOps'"
                                          duration="15min" room="Salle 3" category="Cloud Native"
                                          description=""
                                    />
                                    <Talk subject="Démystifier GitOps"
                                          speaker="Mohamed Chaaben"
                                          company="@Revolve"
                                          duration="15min" room="Salle 4" category="DevOps & SRE"
                                          description="GitOps est un workflow qui permet d'optimiser, fluidifier et sécuriser les mises en production grâce à un système de gestion de versions. Depuis son apparition en 2017 via un article de blog dans le site de Weave works, cette méthode commence à devenir de plus en plus populaire. GitOps est synonyme de “opérations by pull request”. Mais qu'est-ce qu'il se cache vraiment derrière ce terme et pourquoi faut-il envisager d’appliquer cette méthode dans vos projets? Durant ce talk, nous allons démystifier le workflow GitOps et passer en revue les modèles d'implémentation. Le présentation se termine avec une démo de mise en place."
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="12:15"/>
                                    <Talk colSize="4" color="stage-orga"
                                          subject="Cloud Guru, DevSecOps, SRE, SysOps, Cloud Builder, DevOps, Triceratops…. Finalement c’est quoi les métiers du cloud en 2020 ? L’occasion de comprendre ce que sont les métiers du Cloud en 2020, comment recruter, faire évoluer et animer ses équipes pour construire son organisation de demain"
                                          duration="1h30"
                                          category="Table ronde"
                                          speaker="We Love Devs"
                                          room="Salle 1"/>
                                </tr>
                                <tr>
                                    <Slot hour="13:45"/>
                                    <Talk subject="Les opérateurs Kubernetes : opérer des services Cloud Native à grande échelle"
                                          speaker="Horacio Gonzalez"
                                          company = "@OVH"
                                          duration="45min" room="Salle 1" category="Cloud Native"
                                          description="Les opérateurs sont des extensions de Kubernetes qui simplifient l'installation et la gestion des applications en tirant parti des ressources personnalisées de gestion des applications. Le modèle d'opérateur Kubernetes tente d'émuler le rôle d'un opérateur humain, qui utilise sa connaissance approfondie de l'application pour l'installer, l'exploiter et la déboguer. Les opérateurs Kubernetes cherchent à automatiser ces tâches et à faciliter l'ensemble du cycle de vie de l'application. Dans cette présentation, nous expliquerons comment nous utilisons les opérateurs Kubernetes chez OVHcloud et comment ils nous aident à exploiter notre service Kubernetes managé à grande échelle. Nous illustrerons les discussions avec trois exemples concrets: l'opérateur Harbor, l'opérateur LoadBalancing et notre nouveau opérateur NodePool."
                                    />
                                    <Talk subject="Rex : Datadog from Rake to CNAB, an history of deploy tools"
                                          speaker="Pierre Baillet"
                                          company="@Datadog"
                                          duration="45min" room="Salle 2" category="REX"
                                          description="Venez écouter l'histoire des outils de déploiements chez Datadog, leurs réussites, leurs échecs et avoir une idée de ce qui se fait ailleurs et qui marche (ou pas) ! De Rake aux Bundles d'Application Cloud Native, Datadog a dû adapter ses outils de build, de tests et déploiements pour suivre sa croissance rapide et son déploiement d'un Datacenter à plusieurs Clouds et plusieurs régions. Technos utilisées, problèmes rencontrés et espoirs d'avenir, cette présentation présente le chemin parcouru pendant quelques années pour rendre la vie plus facile aux développeurs et augmenter la fiabilité de la plateforme."
                                    />
                                    <Talk subject="Rex : Tencent Multicloud performant entre Europe ET Asie: notre XP!"
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
                                    <Talk subject="Créer une application Cloud Native avec Quarkus et Google Cloud Functions"
                                          speaker="Loïc Mathieu"
                                          company="@Zenika"
                                          duration="45min" room="Salle 1" category="Cloud Native"
                                          description="Après une présentation rapide du framework Quarkus, je vais développer et déployer une application dans Google Cloud à base uniquement de fonctions, via les extensions Quarkus google-cloud-functions, google-cloud-functions-http et funqy-google-cloud-functions. Cette application exposera une API REST et utilisera des fonctionnalités offerte par Google Cloud telle que Google Cloud Storage et Google Cloud Pub/Sub."
                                    />
                                    <Talk subject="SRE, où comment on laisse la Prod voyager de ses propres ailes"
                                          speaker="Sylvain Nieuwlandt"
                                          company="@Sfeir"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"
                                          description="Avoir un mini-infarctus en voyant une page blanche à la place de la Prod ? Faire une checklist de lancement nucléaire au moment de devoir faire une Mise en Prod ? Avoir ce mélange d'adrénaline et de désespoir dès que la sonnerie du téléphone d'astreinte se fait entendre ? Si vous aussi vous connaissez trop bien ces sensations, venez découvrir le SRE, cette magie qui nous a permis de ne plus craindre les déploiements. Mieux même, vous verrez comment cela nous a permis de ne plus nous occuper de la Prod et de la laisser se réparer d'elle-même !"
                                    />
                                    <Talk subject="Rex : Leroy Merlin, Make k8s deployments easy again with Turbine"
                                          speaker="Guillaume Desmidt & Nicolas Lassalle"
                                          company="@Leroy Merlin France & @Zenika"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="T’en a marre d’écrire du YAML ? Turbine est un outil de CD qui permet de déployer facilement des applications dans des clusters kubernetes. À la base développé pour le Web de Leroy Merlin france, Turbine est aujourd'hui devenu un produit groupe qui pilote plus d’un millier de déploiements par jour. Cette présentation sera l'occasion de vous présenter l'outil, son architecture mais aussi les clés de son succès. Turbine est un outil développé en golang et basé sur helm. Son UI lui permet d'être utilisé par le plus grand nombre (développeurs, PO, scrum, RUN, managers) tandis que son moteur de provisioning avancé adresse quant à lui un public plus ops / devops. Créé par une équipe de déjantés, les méthodes de travail utilisées sont à leur image."
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="15:25"/>
                                    <Break colSize="3" text="Pause"/>
                                </tr>
                                <tr>
                                    <Slot hour="15:45"/>
                                    <Talk subject="Github Actions : enfin des pipelines accessibles aux développeurs"
                                          speaker="Antoine Meausoone"
                                          company = "@Sfeir"
                                          duration="45min" room="Salle 1" category="DevOps & SRE"
                                          description="Avez-vous eu déjà été frustré d’avoir des pipelines illisibles, remplies de code bash difficile à lire, et à maintenir ? Ou en tant que développeur, avoir voulu corriger ou ajouter une fonctionnalité dans votre pipeline, et être rebuté face à la complexité du code ? Github vient à la rescousse avec Github Actions, leur offre de CICD. Nous allons voir ensemble quels sont les avantages de Github Actions et ses caractéristiques. Comment il va devenir plus facile de faire évoluer vos pipelines, et pourquoi les pipelines ne seront plus la chasse gardée des DevOps. On va voir donc comment écrire des pipelines, quelle est la logique ? Comment intégrer des Github Actions, et également comment en écrire ! Nous allons également découvrir ses faiblesses, et notamment les problématiques de sécurité (et comment y remédier)."
                                    />
                                    <Talk subject="La prod de vos applis Serverless"
                                          speaker="Alexis Moussine-Pouchkine"
                                          company="@Google"
                                          duration="45min" room="Salle 2" category="Cloud Native"
                                          description=""
                                    />
                                    <Talk subject="Rex : Le modèle Prismea pour lancer sa Fintech sur AWS"
                                          speaker="Samuel Bailly & Clément Vessella"
                                          company="@Ippon"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="Pour Prismea, la nouvelle néo-banque pour les PME/PMI, AWS est une source immense de valeur et d’innovations car ce ne sont pas les technologies seules qui sont importantes mais la composition qu’on en fait pour servir les besoins clients. Prismea a pu lancer son projet en seulement 9 mois . Vous pouvez consulter le webinaire sur cette expérience: https://fr.ippon.tech/webinaire-prismea-fintech-avec-aws/ Nous vous proposons une immersion technique dans le contexte d'une finTech avec nos retours d'expériences avec l'approche Cloud et DevOps Prismea. Comment le déploient continue a permit de développer sur AWS en 9 mois la néo-banque des pro ? Comment l'organisation Prismea à rendu technologiquement et humainement cela possible ? Nous répondrons à tout ces points lors de ce REX animé par les 2 architectes Cloud de Prismea."
                                    />
                                    <Talk subject="Code Quality & SAST sont disponibles dans GitLab Core ... Et alors?"
                                          speaker="Philippe Charrière"
                                          company="@Gitlab"
                                          duration="45min" room="Salle 4" category="DevOps & SRE"
                                          description=""
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
                                    <Talk subject="Optimiser son déploiement Spring Boot dans le cloud"
                                          speaker="Julien Dubois"
                                          company="@Microsoft"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"
                                          description=""
                                    />
                                    <Talk subject="Rex : Marketplace ADEO : Avec Gitops, arrête de bricoler ton cluster"
                                          speaker="Vincent Guardiola & Franck De Graeve & Maxime Tricqueneaux"
                                          company="@Adeo"
                                          duration="45min" room="Salle 3" category="REX"
                                          description="Si comme nous tu passes tes dimanches chez Leroy merlin, tu n’as peut être pas envie de bricoler pour manager ton cluster Kubernetes ! Alors comme nous, utilise Gitops !!! Gitops repose sur la déclaration de notre infrastructure dans un repository Git comme source de vérité. Nous avons choisi un ensemble d’outils (git, argoCD, kustomize..) , qui nous  permettent d'appliquer nos configurations, d’assurer une traçabilité de toutes les modifications apportées sur nos environnements et de garantir l'homogénéité de nos clusters. Nous en profiterons pour vous faire un retour d'expérience sur la mise en place de l’infrastructure dédié à la marketplace européenne Leroy Merlin."
                                    />
                                    <Talk subject="Observability is More than Logs, Metrics & Traces"
                                          speaker="Philipp Krenn"
                                          company="@Elastic"
                                          duration="45min" room="Salle 4" category="Observabilité"
                                          description=""
                                    />
                                </tr>
                                <tr>
                                    <Slot hour="17:30"/>
                                    <Talk colSize="4" color="stage-orga" 
                                          subject="A l’arvoyure: Take away & Mot de la fin 🍻"
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

export default Agenda;
