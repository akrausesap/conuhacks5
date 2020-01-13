<?php
require __DIR__ . '/../vendor/autoload.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * Create a Slim application version 3. See more docs here:
 * http://www.slimframework.com/
 * 
 */
$app = new \Slim\App;

/**
 * POST /emojify
 * 
 * @param body A list of names.
 * 
 * Example:
 * [string, string, ...]
 * 
 * @return payload An array of objects mapping the name to 
 * an emoji unicode.
 * 
 * Example:
 * [
 *  {
 *     name: string,
 *     emoji: string,
 *  },
 *  {
 *     name: string,
 *     emoji: string,
 *  },
 *  ...
 * ]
 */
$app->post('/emojify', function (Request $request, Response $response) {
    $emojis = require __DIR__ . '/../emojis.php';
    $names = $request->getParsedBody();

    $payload = array_map(function ($name) use ($emojis) {
        return [
            'name' => $name,
            'emoji' => $emojis[array_rand($emojis)]
        ];
    }, $names);

    return $response->withJson($payload);
});

/**
 * GET /
 * 
 * @return payload A hello message.
 */
$app->get('/', function(Request $request, Response $response) {
    return $response->getBody()->write('Hello ConUHacks V!');
});

/**
 * Run the slim app.
 */
$app->run();