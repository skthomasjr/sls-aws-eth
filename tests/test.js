'use strict';

const supertest = require('supertest');
const test = require('unit.js');
const server = require('../server');

const request = supertest(server);

describe('Tests app', async () => {
  await it('verifies get', (done) => {
    request.get('/').expect(200).end((err, result) => {
      test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
      done(err);
    });
  });
});
