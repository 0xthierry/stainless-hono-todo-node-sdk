// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TodoHonoSDK, { toFile } from 'stainless-todo-hono-sdk';
import { Response } from 'node-fetch';

const client = new TodoHonoSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource todos', () => {
  test('create: only required params', async () => {
    const responsePromise = client.todos.create({ completed: true, title: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.todos.create({ completed: true, title: 'x', description: 'description' });
  });

  test('retrieve', async () => {
    const responsePromise = client.todos.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.todos.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.todos.update(
        'id',
        { completed: true, description: 'description', title: 'x' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TodoHonoSDK.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.todos.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.todos.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  // skipped: currently no good way to test endpoints with content type text/event-stream, Prism mock server will fail
  test.skip('progress', async () => {
    const responsePromise = client.todos.progress('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints with content type text/event-stream, Prism mock server will fail
  test.skip('progress: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.progress('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('upload', async () => {
    const responsePromise = client.todos.upload('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.upload('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('upload: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.todos.upload(
        'id',
        { file: await toFile(Buffer.from('# my file contents'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TodoHonoSDK.NotFoundError);
  });
});
