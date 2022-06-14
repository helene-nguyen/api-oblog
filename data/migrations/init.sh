#~ Création d'un script via les commandes POSTGRES

export PGUSER=postgres

#* 1 - Création d'un utilisateur en BDD (with login)
# createuser [option_connexion...] [option...] [nom_utilisateur]
createuser -l -P oblog
# Reviens à faire : createuser --login --password --pwprompt oblog

#* 2 - Création d'une BDD ainsi que le propriétaire
# createdb [option_connexion...] [option...] [nombase] [description]
createdb -O oblog oblog
# Reviens à faire : createdb --owner=oblog oblog

#* 3 - Initialiser Sqitch
sqitch init oblog --engine pg

#* 4 - Création d'une version 1 pour la BDD
sqitch add oblog_v1 -n "01 - Créations des tables article / category"