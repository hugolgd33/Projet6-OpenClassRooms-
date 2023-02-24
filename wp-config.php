<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'projet6_openclassrooms' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_uOsdPdI:H~Mx[wC@OT-3Ozz?f=a]izeNfCt>p!fpyB ]q83!3lnS0|UJJKn,psr' );
define( 'SECURE_AUTH_KEY',  '-;s)IF6~`<`$!:nA+O(aV?o<90$nW{/,KdsuOn^4ThA&^dN)925C5_^w2^6G.1hO' );
define( 'LOGGED_IN_KEY',    '&[pB)-r.P9I}hPf]:D6V+$+Irgu4(7y):^b2c:TDFMw} lo7)XA(+V8B3O@:w+]O' );
define( 'NONCE_KEY',        '+REm>(spTEXjeK%/hcOstgL)|Nk{Tv> XtQ{cP?nm1F.gV^X>}!8iW IgH<D|UNk' );
define( 'AUTH_SALT',        'y[=7T;Pk[&fp5c_ /;*Gy,bGnC/g_viWm& kE5_Ix~qeK@s2wWQr851@|,bTmF[Y' );
define( 'SECURE_AUTH_SALT', 'Z{sPLmB7!~V!XNFZ&:$QzDA{a=N3M]wb+Hde;PvE*>$;2hIQd[}ao(TR_A_YQ-v.' );
define( 'LOGGED_IN_SALT',   'qS)$!vXuUPRVEIt_ c^F_2aB=!FEn,}nkgfZF=7YI%^>vhjy|d3/|[DC[lrr`F||' );
define( 'NONCE_SALT',       '=gLFWYk7x!(8#KQA=wWCPf@p<YoN+es>M9B*1xra2g=<VJQX1Kd:t>%&).yFL)$Y' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
