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
                                          speaker="Christophe Maneu"
                                          company = "@Microsoft"
                                          duration="45min" room="Salle 1" category="Cloud Native"/>
                                    <Talk subject="FinOps : et si on arrêtait de balancer l'argent par les fenêtres ?"
                                          speaker="Laurent Grangeau & Olivier Dupré & Tony Jarriault"
                                          company="@Sogeti"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"
                                          description="Consommer les services d'un clouder est très simple. Payer beaucoup trop cher aussi. Malgré la promesse d'un cloud à faible coût, il faut avoir une attitude FinOps si on en veut pas voir la facture exploser. Notre objectif est de vous proposer des pistes d'optimisations des coûts sur vos clouds, publiques comme privés. On vous présentera une approche organisationnelle avant de mettre les mains dans le code et vous montrer 2 cas très concrets sur GCP et AWS."/>
                                    <Talk subject="Les bonnes pratiques de sécurité pour les applications Serverless"
                                          speaker="Steve Houel"
                                          company="@AWS"
                                          duration="45min" room="Salle 3" category="Observabilité"/>
                                    <Talk rowSize="3"
                                          subject="Istio ⛵ par la pratique !"
                                          speaker="Kevin Davin & Nikola Lohinski"
                                          company="@Stack Labs"
                                          duration="2h" room="Salle 4" category="Cloud Native"/>
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
                                          duration="45min" room="Salle 2" category="DevOps & SRE"/>
                                    <Talk subject="REX : Comment créer une solution de log management à l’aide de Datadog ?"
                                          speaker="Anthony Durot & Xavier Top"
                                          company="@Ippon & @Nexity"
                                          duration="45min" room="Salle 3" category="REX"/>
                                </tr>
                                <tr>
                                    <Slot hour="11:50"/>
                                    <Talk subject="Introduction à AWS : son Histoire, son Leadership, ses Clients, ses Services"
                                          speaker="Olivier Lemaitre"
                                          duration="15min" room="Salle 1" category="Cloud Native"/>
                                    <Talk subject="Kubernetes enfin ultra simple & léger avec K3S"
                                          speaker="Sébastien Moreno"
                                          company="@Ippon"
                                          duration="15min" room="Salle 2" category="Orchestration"/>
                                    <Talk subject="Cloud Souverain, par où commencer ?"
                                          speaker="Christophe Chaudier"
                                          company="@Youtube 'Les Compagnons du DevOps'"
                                          duration="15min" room="Salle 3" category="Cloud Native"/>
                                    <Talk subject="Démystifier GitOps"
                                          speaker="Mohamed Chaaben"
                                          company="@Revolve"
                                          duration="15min" room="Salle 4" category="DevOps & SRE"/>
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
                                          duration="45min" room="Salle 1" category="Cloud Native"/>
                                    <Talk subject="Rex : Datadog from Rake to CNAB, an history of deploy tools"
                                          speaker="Pierre Baillet"
                                          company="@Datadog"
                                          duration="45min" room="Salle 2" category="REX"/>
                                    <Talk subject="Rex : Tencent Multicloud performant entre Europe ET Asie: notre XP!"
                                          speaker="Gilles Closset & Tudor Toma"
                                          company="@Tencent Cloud"
                                          duration="45min" room="Salle 3" category="REX"/>
                                    <Talk rowSize="3"
                                          subject="Hands On : Les mains dans le serverless de Google Cloud"
                                          speaker="Guillaume Laforge"
                                          company="@Google"
                                          duration="2h" room="Salle 4" category="Cloud Native"/>
                                </tr>
                                <tr>
                                    <Slot hour="14:40"/>
                                    <Talk subject="Créer une application Cloud Native avec Quarkus et Google Cloud Functions"
                                          speaker="Loïc Mathieu"
                                          company="@Zenika"
                                          duration="45min" room="Salle 1" category="Cloud Native"/>
                                    <Talk subject="SRE, où comment on laisse la Prod voyager de ses propres ailes"
                                          speaker="Sylvain Nieuwlandt"
                                          company="@Sfeir"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"/>
                                    <Talk subject="Rex : Leroy Merlin, Make k8s deployments easy again with Turbine"
                                          speaker="Guillaume Desmidt & Nicolas Lasalle"
                                          company="@Leroy Merlin France & @Zenika"
                                          duration="45min" room="Salle 3" category="REX"/>
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
                                          duration="45min" room="Salle 1" category="DevOps & SRE"/>
                                    <Talk subject="La prod de vos applis Serverless"
                                          speaker="Alexis Moussine-Pouchkine"
                                          company="@Google"
                                          duration="45min" room="Salle 2" category="Cloud Native"/>
                                    <Talk subject="Rex : Le modèle Prismea pour lancer sa Fintech sur AWS"
                                          speaker="Samuel Bailly & Clément Vessella"
                                          company="@Ippon"
                                          duration="45min" room="Salle 3" category="REX"/>
                                    <Talk subject="Code Quality & SAST sont disponibles dans GitLab Core ... Et alors?"
                                          speaker="Philippe Charrière"
                                          company="@Gitlab"
                                          duration="45min" room="Salle 4" category="DevOps & SRE"/>
                                </tr>
                                <tr>
                                    <Slot hour="16:40"/>
                                    <Talk subject="Je fais partie d'une espèce menacée d'extinction"
                                          speaker="Olivier Poncet"
                                          company = "@Suricats Consulting"
                                          duration="45min" room="Salle 1" category="REX"/>
                                    <Talk subject="Optimiser son déploiement Spring Boot dans le cloud"
                                          speaker="Julien Dubois"
                                          company="@Microsoft"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"/>
                                    <Talk subject="Rex : Marketplace ADEO : Avec Gitops, arrête de bricoler ton cluster"
                                          speaker="Vincent Guardiola & Franck De Graeve & Maxime Tricqueneaux"
                                          company="@Adeo"
                                          duration="45min" room="Salle 3" category="REX"/>
                                    <Talk subject="Observability is More than Logs, Metrics & Traces"
                                          speaker="Philipp Krenn"
                                          company="@Elastic"
                                          duration="45min" room="Salle 4" category="Observabilité"/>
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
