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
                                    <Talk colSize="4" color="stage-orga" subject="Café avec l'orga" duration="15min"
                                          room="Salle 1"/>
                                </tr>
                                <tr>
                                    <Slot hour="09:15"/>
                                    <Talk colSize="4" color="stage-keynote" subject="Keynote" duration="30min"
                                          room="Salle 1"/>
                                </tr>
                                <tr>
                                    <Slot hour="09:50"/>
                                    <Talk color="stage-conf"
                                          subject="Et si ca tourne mal ? Recettes pour des applications résilientes"
                                          speaker="C. MANEU"
                                          duration="45min" room="Salle 1" category="Cloud Native"/>
                                    <Talk color="stage-conf"
                                          subject="Du DevOps multi Cloud avec Kubernetes et Terraform"
                                          speaker="T. Rannou"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"/>
                                    <Talk color="stage-conf"
                                          subject="Les bonnes pratiques de sécurité pour les applications Serverless"
                                          speaker="Steve Houel"
                                          duration="45min" room="Salle 3" category="Observabilité"/>
                                    <Talk rowSize="2" color="stage-deepdive"
                                          subject="Istio par la pratique !"
                                          speaker="Kevin Davin & Nikola Lohinski"
                                          duration="2h" room="Salle 4" category="DevOps & SRE"/>
                                </tr>
                                <tr>
                                    <Slot hour="10:55"/>
                                    <Talk color="stage-conf"
                                          subject="9 questions que vous devriez vous poser sur vos applications Serverless"
                                          speaker="F.BOUTERUCHE"
                                          duration="45min" room="Salle 1" category="Cloud Native"/>
                                    <Talk color="stage-conf"
                                          subject="Optimiser son déploiement Spring Boot dans le cloud"
                                          speaker="Julien Dubois"
                                          duration="45min" room="Salle 2" category="DevOps & SRE"/>
                                    <Talk color="stage-conf"
                                          subject="REX : Comment créer une solution de log management à l’aide de Datadog ?"
                                          speaker="A.Durot & X.Top"
                                          duration="45min" room="Salle 3" category="Observabilité"/>
                                </tr>
                                <tr>
                                    <Slot hour="11:50"/>
                                    <Talk color="stage-qwickie"
                                          subject="Intro AWS"
                                          speaker="O.Lemaitre"
                                          duration="15min" room="Salle 1" category="Cloud Native"/>
                                    <Talk color="stage-qwickie"
                                          subject="K8S enfin ultra simple"
                                          speaker="Sébastien Moreno"
                                          duration="15min" room="Salle 2" category="DevOps & SRE"/>
                                    <Talk color="stage-qwickie"
                                          subject="Cloud Souverain"
                                          speaker="Christophe Chaudier / Compagnons DevOps"
                                          duration="15min" room="Salle 3" category="Observabilité"/>
                                    <Talk color="stage-qwickie"
                                          subject="Démystifier GitOps"
                                          speaker="Mohamed Chaaben"
                                          duration="15min" room="Salle 4" category="Observabilité"/>
                                </tr>
                                <tr>
                                    <Slot hour="12:30"/>
                                    <Break text="Pause Déjeuner"/>
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
