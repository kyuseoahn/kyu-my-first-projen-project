# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Bucket <a name="S3Bucket" id="kyu-my-first-projen-project.S3Bucket"></a>

#### Initializers <a name="Initializers" id="kyu-my-first-projen-project.S3Bucket.Initializer"></a>

```typescript
import { S3Bucket } from 'kyu-my-first-projen-project'

new S3Bucket(scope: Construct, id: string, props: S3BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kyu-my-first-projen-project.S3Bucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#kyu-my-first-projen-project.S3Bucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kyu-my-first-projen-project.S3Bucket.Initializer.parameter.props">props</a></code> | <code><a href="#kyu-my-first-projen-project.S3BucketProps">S3BucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kyu-my-first-projen-project.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="kyu-my-first-projen-project.S3Bucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kyu-my-first-projen-project.S3Bucket.Initializer.parameter.props"></a>

- *Type:* <a href="#kyu-my-first-projen-project.S3BucketProps">S3BucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kyu-my-first-projen-project.S3Bucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="kyu-my-first-projen-project.S3Bucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kyu-my-first-projen-project.S3Bucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kyu-my-first-projen-project.S3Bucket.isConstruct"></a>

```typescript
import { S3Bucket } from 'kyu-my-first-projen-project'

S3Bucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kyu-my-first-projen-project.S3Bucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kyu-my-first-projen-project.S3Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="kyu-my-first-projen-project.S3Bucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### S3BucketProps <a name="S3BucketProps" id="kyu-my-first-projen-project.S3BucketProps"></a>

#### Initializer <a name="Initializer" id="kyu-my-first-projen-project.S3BucketProps.Initializer"></a>

```typescript
import { S3BucketProps } from 'kyu-my-first-projen-project'

const s3BucketProps: S3BucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kyu-my-first-projen-project.S3BucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | A unique bucket name. |
| <code><a href="#kyu-my-first-projen-project.S3BucketProps.property.readAccess">readAccess</a></code> | <code>boolean</code> | Determines if the bucket is created as readOnly. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="kyu-my-first-projen-project.S3BucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

A unique bucket name.

---

##### `readAccess`<sup>Required</sup> <a name="readAccess" id="kyu-my-first-projen-project.S3BucketProps.property.readAccess"></a>

```typescript
public readonly readAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Determines if the bucket is created as readOnly.

---



