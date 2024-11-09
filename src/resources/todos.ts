// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Todos extends APIResource {
  create(body: TodoCreateParams, options?: Core.RequestOptions): Core.APIPromise<TodoCreateResponse> {
    return this._client.post('/todos', { body, ...options });
  }

  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<TodoRetrieveResponse> {
    return this._client.get(`/todos/${id}`, options);
  }

  update(
    id: string,
    body?: TodoUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUpdateResponse>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<TodoUpdateResponse>;
  update(
    id: string,
    body: TodoUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.put(`/todos/${id}`, { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<TodoListResponse> {
    return this._client.get('/todos', options);
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/todos/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  progress(id: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/todos/${id}/progress`, {
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  upload(
    id: string,
    body?: TodoUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUploadResponse>;
  upload(id: string, options?: Core.RequestOptions): Core.APIPromise<TodoUploadResponse>;
  upload(
    id: string,
    body: TodoUploadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUploadResponse> {
    if (isRequestOptions(body)) {
      return this.upload(id, {}, body);
    }
    return this._client.post(`/todos/${id}/upload`, Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface TodoCreateResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export interface TodoRetrieveResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export interface TodoUpdateResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export type TodoListResponse = Array<TodoListResponse.TodoListResponseItem>;

export namespace TodoListResponse {
  export interface TodoListResponseItem {
    id: string;

    completed: boolean;

    title: string;

    description?: string;

    fileUrl?: string;
  }
}

export type TodoProgressResponse = string;

export interface TodoUploadResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export interface TodoCreateParams {
  completed: boolean;

  title: string;

  description?: string;
}

export interface TodoUpdateParams {
  completed?: boolean;

  description?: string;

  title?: string;
}

export interface TodoUploadParams {
  file?: Core.Uploadable;
}

export declare namespace Todos {
  export {
    type TodoCreateResponse as TodoCreateResponse,
    type TodoRetrieveResponse as TodoRetrieveResponse,
    type TodoUpdateResponse as TodoUpdateResponse,
    type TodoListResponse as TodoListResponse,
    type TodoProgressResponse as TodoProgressResponse,
    type TodoUploadResponse as TodoUploadResponse,
    type TodoCreateParams as TodoCreateParams,
    type TodoUpdateParams as TodoUpdateParams,
    type TodoUploadParams as TodoUploadParams,
  };
}
