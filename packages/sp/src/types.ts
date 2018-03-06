// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
import { TypedHash } from "@pnp/common";

/**
 * Represents the unique sequential location of a change within the change log.
 */
export interface ChangeToken {
    /**
     * Gets or sets a string value that contains the serialized representation of the change token generated by the protocol server.
     */
    StringValue: string;
}

/**
 * Defines a query that is performed against the change log.
 */
export interface ChangeQuery {
    /**
     * Gets or sets a value that specifies whether add changes are included in the query.
     */
    Add?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to alerts are included in the query.
     */
    Alert?: boolean;

    /**
     * Gets or sets a value that specifies the end date and end time for changes that are returned through the query.
     */
    ChangeTokenEnd?: ChangeToken;

    /**
     * Gets or sets a value that specifies the start date and start time for changes that are returned through the query.
     */
    ChangeTokenStart?: ChangeToken;

    /**
     * Gets or sets a value that specifies whether changes to content types are included in the query.
     */
    ContentType?: boolean;

    /**
     * Gets or sets a value that specifies whether deleted objects are included in the query.
     */
    DeleteObject?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to fields are included in the query.
     */
    Field?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to files are included in the query.
     */
    File?: boolean;

    /**
     * Gets or sets value that specifies whether changes to folders are included in the query.
     */
    Folder?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to groups are included in the query.
     */
    Group?: boolean;

    /**
     * Gets or sets a value that specifies whether adding users to groups is included in the query.
     */
    GroupMembershipAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether deleting users from the groups is included in the query.
     */
    GroupMembershipDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether general changes to list items are included in the query.
     */
    Item?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to lists are included in the query.
     */
    List?: boolean;

    /**
     * Gets or sets a value that specifies whether move changes are included in the query.
     */
    Move?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to the navigation structure of a site collection are included in the query.
     */
    Navigation?: boolean;

    /**
     * Gets or sets a value that specifies whether renaming changes are included in the query.
     */
    Rename?: boolean;

    /**
     * Gets or sets a value that specifies whether restoring items from the recycle bin or from backups is included in the query.
     */
    Restore?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether modifications to security policies are included in the query.
     */
    SecurityPolicy?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to site collections are included in the query.
     */
    Site?: boolean;

    /**
     * Gets or sets a value that specifies whether updates made using the item SystemUpdate method are included in the query.
     */
    SystemUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether update changes are included in the query.
     */
    Update?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to users are included in the query.
     */
    User?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to views are included in the query.
     */
    View?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to Web sites are included in the query.
     */
    Web?: boolean;
}

/**
 * Specifies a Collaborative Application Markup Language (CAML) query on a list or joined lists.
 */
export interface CamlQuery {

    /**
     * Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format.
     */
    DatesInUtc?: boolean;

    /**
     * Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned.
     */
    FolderServerRelativeUrl?: string;

    /**
     * Gets or sets a value that specifies the information required to get the next page of data for the list view.
     */
    ListItemCollectionPosition?: ListItemCollectionPosition;

    /**
     * Gets or sets value that specifies the XML schema that defines the list view.
     */
    ViewXml?: string;
}

/**
 * Specifies the information required to get the next page of data for a list view.
 */
export interface ListItemCollectionPosition {
    /**
     * Gets or sets a value that specifies information, as name-value pairs, required to get the next page of data for a list view.
     */
    PagingInfo: string;
}

/**
 * Represents the input parameter of the GetListItemChangesSinceToken method.
 */
export interface ChangeLogitemQuery {
    /**
     * The change token for the request.
     */
    ChangeToken?: string;

    /**
     * The XML element that defines custom filtering for the query.
     */
    Contains?: string;

    /**
     * The records from the list to return and their return order.
     */
    Query?: string;

    /**
     * The options for modifying the query.
     */
    QueryOptions?: string;

    /**
     * RowLimit
     */
    RowLimit?: string;

    /**
     * The names of the fields to include in the query result.
     */
    ViewFields?: string;

    /**
     * The GUID of the view.
     */
    ViewName?: string;
}

/**
 * Determines the display mode of the given control or view
 */
export enum ControlMode {
    Display = 1,
    Edit = 2,
    New = 3,
}

/**
 * Represents properties of a list item field and its value.
 */
export interface ListItemFormUpdateValue {

    /**
     * The error message result after validating the value for the field.
     */
    ErrorMessage?: string;

    /**
     * The internal name of the field.
     */
    FieldName?: string;

    /**
     * The value of the field, in string format.
     */
    FieldValue?: string;

    /**
     * Indicates whether there was an error result after validating the value for the field.
     */
    HasException?: boolean;
}

/**
 * Specifies the type of the field.
 */
export enum FieldTypes {
    Invalid = 0,
    Integer = 1,
    Text = 2,
    Note = 3,
    DateTime = 4,
    Counter = 5,
    Choice = 6,
    Lookup = 7,
    Boolean = 8,
    Number = 9,
    Currency = 10,
    URL = 11,
    Computed = 12,
    Threading = 13,
    Guid = 14,
    MultiChoice = 15,
    GridChoice = 16,
    Calculated = 17,
    File = 18,
    Attachments = 19,
    User = 20,
    Recurrence = 21,
    CrossProjectLink = 22,
    ModStat = 23,
    Error = 24,
    ContentTypeId = 25,
    PageSeparator = 26,
    ThreadIndex = 27,
    WorkflowStatus = 28,
    AllDayEvent = 29,
    WorkflowEventType = 30,
}

export enum DateTimeFieldFormatType {
    DateOnly = 0,
    DateTime = 1,
}

/**
 * Specifies the control settings while adding a field.
 */
export enum AddFieldOptions {
    /**
     *  Specify that a new field added to the list must also be added to the default content type in the site collection
     */
    DefaultValue = 0,
    /**
     * Specify that a new field added to the list must also be added to the default content type in the site collection.
     */
    AddToDefaultContentType = 1,
    /**
     * Specify that a new field must not be added to any other content type
     */
    AddToNoContentType = 2,
    /**
     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
     */
    AddToAllContentTypes = 4,
    /**
     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
     */
    AddFieldInternalNameHint = 8,
    /**
     * Specify that a new field that is added to the specified list must also be added to the default list view
     */
    AddFieldToDefaultView = 16,
    /**
     * Specify to confirm that no other field has the same display name
     */
    AddFieldCheckDisplayName = 32,
}

export interface XmlSchemaFieldCreationInformation {
    Options?: AddFieldOptions;
    SchemaXml: string;
}

export enum CalendarType {
    Gregorian = 1,
    Japan = 3,
    Taiwan = 4,
    Korea = 5,
    Hijri = 6,
    Thai = 7,
    Hebrew = 8,
    GregorianMEFrench = 9,
    GregorianArabic = 10,
    GregorianXLITEnglish = 11,
    GregorianXLITFrench = 12,
    KoreaJapanLunar = 14,
    ChineseLunar = 15,
    SakaEra = 16,
    UmAlQura = 23,
}

export enum UrlFieldFormatType {
    Hyperlink = 0,
    Image = 1,
}

export interface BasePermissions {
    Low: number;
    High: number;
}

export enum PermissionKind {

    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    EmptyMask = 0,

    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    ViewListItems = 1,

    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    AddListItems = 2,

    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    EditListItems = 3,

    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    DeleteListItems = 4,

    /**
     * Approve a minor version of a list item or document.
     */
    ApproveItems = 5,

    /**
     * View the source of documents with server-side file handlers.
     */
    OpenItems = 6,

    /**
     * View past versions of a list item or document.
     */
    ViewVersions = 7,

    /**
     * Delete past versions of a list item or document.
     */
    DeleteVersions = 8,

    /**
     * Discard or check in a document which is checked out to another user.
     */
    CancelCheckout = 9,

    /**
     * Create, change, and delete personal views of lists.
     */
    ManagePersonalViews = 10,

    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    ManageLists = 12,

    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    ViewFormPages = 13,

    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    AnonymousSearchAccessList = 14,

    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    Open = 17,

    /**
     * View pages in a Site.
     */
    ViewPages = 18,

    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    AddAndCustomizePages = 19,

    /**
     * Apply a theme or borders to the entire Site.
     */
    ApplyThemeAndBorder = 20,

    /**
     * Apply a style sheet (.css file) to the Site.
     */
    ApplyStyleSheets = 21,

    /**
     * View reports on Site usage.
     */
    ViewUsageData = 22,

    /**
     * Create a Site using Self-Service Site Creation.
     */
    CreateSSCSite = 23,

    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    ManageSubwebs = 24,

    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    CreateGroups = 25,

    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    ManagePermissions = 26,

    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    BrowseDirectories = 27,

    /**
     * View information about users of the Site.
     */
    BrowseUserInfo = 28,

    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    AddDelPrivateWebParts = 29,

    /**
     * Update Web Parts to display personalized information.
     */
    UpdatePersonalWebParts = 30,

    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    ManageWeb = 31,

    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    AnonymousSearchAccessWebLists = 32,

    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    UseClientIntegration = 37,

    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    UseRemoteAPIs = 38,

    /**
     * Manage alerts for all users of the Site.
     */
    ManageAlerts = 39,

    /**
     * Create e-mail alerts.
     */
    CreateAlerts = 40,

    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    EditMyUserInfo = 41,

    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    EnumeratePermissions = 63,

    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    FullMask = 65,
}

export interface FollowedContent {
    FollowedDocumentsUrl: string;
    FollowedSitesUrl: string;
}

export interface UserProfile {
    /**
     * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
     */
    FollowedContent?: FollowedContent;
    /**
     * The account name of the user. (SharePoint Online only)
     */
    AccountName?: string;
    /**
     * The display name of the user. (SharePoint Online only)
     */
    DisplayName?: string;
    /**
     * The FirstRun flag of the user. (SharePoint Online only)
     */
    O15FirstRunExperience?: number;
    /**
     * The personal site of the user.
     */
    PersonalSite?: string;
    /**
     * The capabilities of the user's personal site. Represents a bitwise PersonalSiteCapabilities value:
     * None = 0; Profile Value = 1; Social Value = 2; Storage Value = 4; MyTasksDashboard Value = 8; Education Value = 16; Guest Value = 32.
     */
    PersonalSiteCapabilities?: number;
    /**
     * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
     */
    PersonalSiteFirstCreationError?: string;
    /**
     * The date and time when the user's personal site was first created. (SharePoint Online only)
     */
    PersonalSiteFirstCreationTime?: Date;
    /**
     * The status for the state of the personal site instantiation
     */
    PersonalSiteInstantiationState?: number;
    /**
     * The date and time when the user's personal site was last created. (SharePoint Online only)
     */
    PersonalSiteLastCreationTime?: Date;
    /**
     * The number of attempts made to create the user's personal site. (SharePoint Online only)
     */
    PersonalSiteNumberOfRetries?: number;
    /**
     * Indicates whether the user's picture is imported from Exchange.
     */
    PictureImportEnabled?: boolean;
    /**
     * The public URL of the personal site of the current user. (SharePoint Online only)
     */
    PublicUrl?: string;
    /**
     * The URL used to create the user's personal site.
     */
    UrlToCreatePersonalSite?: string;
}

export interface HashTag {
    /**
     * The hash tag's internal name.
     */
    Name?: string;
    /**
     * The number of times that the hash tag is used.
     */
    UseCount?: number;
}

export interface HashTagCollection {
    Items: HashTag[];
}

export interface UserIdInfo {
    NameId?: string;
    NameIdIssuer?: string;
}

export enum PrincipalType {
    None = 0,
    User = 1,
    DistributionList = 2,
    SecurityGroup = 4,
    SharePointGroup = 8,
    All = 15,
}

export enum PrincipalSource {
    None = 0,
    UserInfoList = 1,
    Windows = 2,
    MembershipProvider = 4,
    RoleProvider = 8,
    All = 15,
}

export enum RoleType {
    None = 0,
    Guest = 1,
    Reader = 2,
    Contributor = 3,
    WebDesigner = 4,
    Administrator = 5,
}

export interface PrincipalInfo {
    Department: string;
    DisplayName: string;
    Email: string;
    JobTitle: string;
    LoginName: string;
    Mobile: string;
    PrincipalId: number;
    PrincipalType: PrincipalType;
    SIPAddress: string;
}

export interface DocumentLibraryInformation {
    AbsoluteUrl?: string;
    Modified?: Date;
    ModifiedFriendlyDisplay?: string;
    ServerRelativeUrl?: string;
    Title?: string;
}

export interface ContextInfo {
    FormDigestTimeoutSeconds?: number;
    FormDigestValue?: number;
    LibraryVersion?: string;
    SiteFullUrl?: string;
    SupportedSchemaVersions?: string[];
    WebFullUrl?: string;
}

export interface RenderListData {
    Row: any[];
    FirstRow: number;
    FolderPermissions: string;
    LastRow: number;
    FilterLink: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
}

export enum PageType {
    Invalid = -1,
    DefaultView,
    NormalView,
    DialogView,
    View,
    DisplayForm,
    DisplayFormDialog,
    EditForm,
    EditFormDialog,
    NewForm,
    NewFormDialog,
    SolutionForm,
    PAGE_MAXITEMS,
}

export interface ListFormData {
    ContentType?: string;
    Title?: string;
    Author?: string;
    Editor?: string;
    Created?: Date;
    Modified: Date;
    Attachments?: any;
    ListSchema?: any;
    FormControlMode?: number;
    FieldControlModes?: {
        Title?: number,
        Author?: number,
        Editor?: number,
        Created?: number,
        Modified?: number,
        Attachments?: number,
    };
    WebAttributes?: {
        WebUrl?: string,
        EffectivePresenceEnabled?: boolean,
        AllowScriptableWebParts?: boolean,
        PermissionCustomizePages?: boolean,
        LCID?: number,
        CurrentUserId?: number,
    };
    ItemAttributes?: {
        Id?: number,
        FsObjType?: number,
        ExternalListItem?: boolean,
        Url?: string,
        EffectiveBasePermissionsLow?: number,
        EffectiveBasePermissionsHigh?: number,
    };
    ListAttributes?: {
        Id?: string,
        BaseType?: number,
        Direction?: string,
        ListTemplateType?: number,
        DefaultItemOpen?: number,
        EnableVersioning?: boolean,
    };
    CSRCustomLayout?: boolean;
    PostBackRequired?: boolean;
    PreviousPostBackHandled?: boolean;
    UploadMode?: boolean;
    SubmitButtonID?: string;
    ItemContentTypeName?: string;
    ItemContentTypeId?: string;
    JSLinks?: string;
}

export enum SharingLinkKind {
    /**
     * Uninitialized link
     */
    Uninitialized = 0,
    /**
     * Direct link to the object being shared
     */
    Direct = 1,
    /**
     * Organization-shareable link to the object being shared with view permissions
     */
    OrganizationView = 2,
    /**
     * Organization-shareable link to the object being shared with edit permissions
     */
    OrganizationEdit = 3,
    /**
     * View only anonymous link
     */
    AnonymousView = 4,
    /**
     * Read/Write anonymous link
     */
    AnonymousEdit = 5,
    /**
     * Flexible sharing Link where properties can change without affecting link URL
     */
    Flexible = 6,
}

export interface ShareObjectOptions {
    url?: string;
    loginNames?: string | string[];
    role: SharingRole;
    emailData?: SharingEmailData;
    group?: RoleType;
    propagateAcl?: boolean;
    includeAnonymousLinkInEmail?: boolean;
    useSimplifiedRoles?: boolean;
}

/**
 * Indicates the role of the sharing link
 */
export enum SharingRole {
    None = 0,
    View = 1,
    Edit = 2,
    Owner = 3,
}

/**
 * Represents email data.
 */
export interface SharingEmailData {

    /**
     * The e-mail subject.
     */
    subject?: string;

    /**
     * The e-mail body.
     */
    body: string;
}

export interface ShareLinkSettings {
    /**
     * The optional unique identifier of an existing sharing link to be retrieved and updated if necessary.
     */
    shareId?: string;

    /**
     * The kind of the sharing link to be created.
     */
    linkKind: SharingLinkKind;

    /**
     * A date/time string for which the format conforms to the ISO 8601:2004(E) complete representation for calendar date and time of day and
     * which represents the time and date of expiry for the anonymous link. Both the minutes and hour value must be specified for the
     * difference between the local and UTC time. Midnight is represented as 00:00:00.
     */
    expiration?: string;

    /**
     * The role to be used for the sharing link. This is required for Flexible links, and ignored for legacy link kinds.
     */
    role?: SharingRole;

    /**
     * Indicates if the sharing link, should support anonymous access. This is required for Flexible links, and ignored for legacy link kinds.
     */
    allowAnonymousAccess?: boolean;
}

export interface ShareLinkRequest {

    /**
     * A string of JSON representing users in people picker format. Only needed if an e-mail notification should be sent.
     */
    peoplePickerInput?: string;

    /**
     * Whether to create the link or not if it doesn't exist yet.
     */
    createLink: boolean;

    /**
     * The e-mail data. Only needed if an e-mail notification should be sent.
     */
    emailData?: SharingEmailData;

    /**
     * The settings for the sharing link to be created/updated
     */
    settings: ShareLinkSettings;
}

/**
 * Represents a response for sharing a link
 */
export interface ShareLinkResponse {
    /**
     * A SharingLinkInfo that represents the sharing link. Will be populated if sharing operation is returning a sharing link.
     */
    sharingLinkInfo: SharingLinkInfo;
}

export interface SharingLinkInfo {

    AllowsAnonymousAccess: boolean;
    Created: string;
    CreatedBy: PrincipalInfo;
    Expiration: string;
    IsActive: boolean;
    IsEditLink: boolean;
    IsFormsLink: boolean;
    IsUnhealthy: boolean;
    LastModified: string;
    LastModifiedBy: PrincipalInfo;
    LinkKind: SharingLinkKind;
    ShareId: string;
    Url: string;
}

export enum SharingOperationStatusCode {
    /**
     * The share operation completed without errors.
     */
    CompletedSuccessfully = 0,
    /**
     * The share operation completed and generated requests for access.
     */
    AccessRequestsQueued = 1,
    /**
     * The share operation failed as there were no resolved users.
     */
    NoResolvedUsers = -1,
    /**
     * The share operation failed due to insufficient permissions.
     */
    AccessDenied = -2,
    /**
     * The share operation failed when attempting a cross site share, which is not supported.
     */
    CrossSiteRequestNotSupported = -3,
    /**
     * The sharing operation failed due to an unknown error.
     */
    UnknowError = -4,
    /**
     * The text you typed is too long. Please shorten it.
     */
    EmailBodyTooLong = -5,
    /**
     * The maximum number of unique scopes in the list has been exceeded.
     */
    ListUniqueScopesExceeded = -6,
    /**
     * The share operation failed because a sharing capability is disabled in the site.
     */
    CapabilityDisabled = -7,
    /**
     * The specified object for the share operation is not supported.
     */
    ObjectNotSupported = -8,
    /**
     * A SharePoint group cannot contain another SharePoint group.
     */
    NestedGroupsNotSupported = -9,
}

export interface SharingResult {

    /**
     * The relative URL of a page which can be navigated to, to show permissions.
     */
    PermissionsPageRelativeUrl?: string;

    /**
     * A collection of users which have new pending access requests as a result of sharing.
     */
    UsersWithAccessRequests?: any[]; // SPSharingUserCollection

    /**
     * An enumeration which summarizes the result of the sharing operation.
     */
    StatusCode?: SharingOperationStatusCode;

    /**
     * An error message about the failure if sharing was unsuccessful.
     */
    ErrorMessage?: string;

    /**
     * A list of UserSharingResults from attempting to share a securable with unique permissions.
     */
    UniquelyPermissionedUsers?: UserSharingResult[];
    /**
     * Groups which were granted permissions.
     */
    GroupsSharedWith?: any[]; // SPGroupCollection

    /**
     * The SharePoint group users were added to, if any were added to a group.
     */
    GroupUsersAddedTo?: any; // SPGroup

    /**
     * A list of users being added to a SharePoint permissions goup
     */
    UsersAddedToGroup?: UserSharingResult[];

    /**
     * A list of SPInvitationCreationResult for external users being invited to have access.
     */
    InvitedUsers?: SPInvitationCreationResult[];

    /**
     * The name of the securable being shared.
     */
    Name?: string;

    /**
     * The url of the securable being shared.
     */
    Url?: string;

    /**
     * IconUrl
     */
    IconUrl?: string;
}

export interface UserSharingResult {
    IsUserKnown?: boolean;
    Status?: boolean;
    Message?: string;
    User?: string;
    DisplayName?: string;
    Email?: string;
    CurrentRole?: SharingRole;
    AllowedRoles?: SharingRole[];
    InvitationLink?: string;
}

export interface SPInvitationCreationResult {
    Succeeded?: boolean;
    Email?: string;
    InvitationLink?: string;
}

export interface SharingRecipient {
    email?: string;
    alias?: string;
}

export interface SharingEntityPermission {
    /**
     * The Input Entity provided to the Call.
     */
    inputEntity: string;
    /**
     * The Resolved Entity after resolving using PeoplePicker API.
     */
    resolvedEntity: string;
    /**
     * Does the Entity have Access to the Securable Object
     */
    hasAccess: boolean;
    /**
     * Role of the Entity on ListItem
     */
    role: SharingRole;
}

export interface SharingInformationRequest {
    /**
     * Max Principal's to return.
     */
    maxPrincipalsToReturn: number;
    /**
     * Supported Features (For future use by Office Client).
     */
    clientSupportedFeatures: string;
}

export interface ObjectSharingSettings {
    /**
     * The URL pointing to the containing SPWeb object
     */
    WebUrl: string;
    /**
     * The unique ID of the parent list (if applicable)
     */
    ListId?: string;
    /**
     * The list item ID (if applicable)
     */
    ItemId?: string;
    /**
     * The object title
     */
    ItemName: string;
    /**
     * The server relative object URL
     */
    ItemUrl: string;
    /**
     * Contains information about the sharing state of a shareable object
     */
    ObjectSharingInformation: any; // SPObjectSharingInformation
    /**
     * Boolean indicating whether the sharing context operates under the access request mode
     */
    AccessRequestMode: boolean;
    /**
     * Boolean indicating whether the sharing context operates under the permissions only mode
     * (i.e. adding to a group or hiding the groups dropdown in the SharePoint UI)
     */
    PermissionsOnlyMode: boolean;
    /**
     * URL of the site from which the shared object inherits permissions
     */
    InheritingWebLink: string;
    /**
     * Boolean flag denoting if guest users are enabled for the site collection
     */
    ShareByEmailEnabled: boolean;
    /**
     * Boolean indicating whether the current user is a guest user
     */
    IsGuestUser: boolean;
    /**
     * Boolean indicating whether the site has the standard "Editor" role
     */
    HasEditRole: boolean;
    /**
     * Boolean indicating whether the site has the standard "Reader" role
     */
    HasReadRole: boolean;
    /**
     * Boolean indicating whether the object to share is a picture library
     */
    IsPictureLibrary: boolean;
    /**
     * Boolean indicating whether the folder object can be shared
     */
    CanShareFolder: boolean;
    /**
     * Boolean indicating whether email invitations can be sent
     */
    CanSendEmail: boolean;
    /**
     * Default share link type
     */
    DefaultShareLinkType: SharingLinkKind;
    /**
     * Boolean indicating whether the object to share supports ACL propagation
     */
    SupportsAclPropagation: boolean;
    /**
     * Boolean indicating whether the current user can only share within the tenancy
     */
    CanCurrentUserShareInternally: boolean;
    /**
     * Boolean indicating whether the current user can share outside the tenancy, by inviting external users
     */
    CanCurrentUserShareExternally: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an anonymous View link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an anonymous Edit link
     */
    CanCurrentUserManageReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an anonymous Edit link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an anonymous Edit link
     */
    CanCurrentUserManageReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an organization View link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveOrganizationReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an organization Edit link
     */
    CanCurrentUserManageOrganizationReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an organization Edit link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveOrganizationReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an organization Edit link
     */
    CanCurrentUserManageOrganizationReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can make use of Share-By-Link
     */
    CanSendLink: boolean;
    /**
     * Boolean indicating whether the client logic should warn the user
     * that they are about to share with external email addresses.
     */
    ShowExternalSharingWarning: boolean;
    /**
     * A list of SharingPermissionInformation objects that can be used to share
     */
    SharingPermissions: any[]; // SPSharingPermissionInformationCollection
    /**
     * A dictionary object that lists the display name and the id of
     * the SharePoint simplified roles (edit, view)
     */
    SimplifiedRoles: { [key: string]: string };
    /**
     * A dictionary object that lists the display name and the id of the SharePoint groups
     */
    GroupsList: { [key: string]: string };
    /**
     * A dictionary object that lists the display name and the id of the SharePoint regular roles
     */
    Roles: { [key: string]: string };
    /**
     * An object containing the SharePoint UI specific sharing settings.
     */
    SharePointSettings: any; // SharePointSharingSettings
    /**
     * Boolean indicating whether the current user is a site collection administrator
     */
    IsUserSiteAdmin: boolean;
    /**
     * A value that indicates number of days an anonymous link can be valid before it expires
     */
    RequiredAnonymousLinkExpirationInDays: number;
}

export interface SharingInformation {
    /**
     * External Sharing.
     */
    canAddExternalPrincipal?: boolean;
    /**
     * Internal Sharing.
     */
    canAddInternalPrincipal?: boolean;
    /**
     * Can Send Email.
     */
    canSendEmail?: boolean;
    /**
     * Can Use Simplified Roles present in Roles Enum.
     */
    canUseSimplifiedRoles?: boolean;
    /**
     * Has Unique Permissions.
     */
    hasUniquePermissions?: boolean;
    /**
     * Current Users Role on the Item.
     */
    currentRole?: SharingRole;
    /**
     * Does the User+Item require Approval from Admin for Sharing.
     */
    requiresAccessApproval?: boolean;
    /**
     * (Owners only)Whether there are pending access requests for the securable object.
     */
    hasPendingAccessRequests?: boolean;
    /**
     * (Owners only)The link to the access requests page for the securable object, or an empty string if the link is not available.
     */
    pendingAccessRequestsLink?: string;
    /**
     * sharedObjectType
     */
    sharedObjectType?: SPSharedObjectType;
    /**
     * Url for the Securable Object (Encoded).
     */
    directUrl?: string;
    /**
     * Parent Web Url for the Securable Object (Encoded).
     */
    webUrl?: string;
    /**
     * Default SharingLinkKind.
     */
    defaultLinkKind?: SharingLinkKind;
    /**
     * Tenant's SharingDomainRestrictionMode.
     */
    domainRestrictionMode?: SharingDomainRestrictionMode;
    /**
     * Tenant's RestrictedDomains.
     */
    RestrictedDomains?: string;
    /**
     * Tenant's Anonymous Link Expiration Restriction in Days.
     */
    anonymousLinkExpirationRestrictionDays?: number;
    /**
     * The PermissionCollection that are on the Securable Object (Princpals & Links)
     */
    permissionsInformation?: any; // PermissionCollection
    /**
     * PickerSettings used by the PeoplePicker Control.
     */
    pickerSettings?: any; // PickerSettings
}

export enum SPSharedObjectType {
    Unknown = 0,
    File = 1,
    Folder = 2,
    Item = 3,
    List = 4,
    Web = 5,
    Max = 6,
}

export enum SharingDomainRestrictionMode {
    None = 0,
    AllowList = 1,
    BlockList = 2,
}

export interface EmailProperties {

    To: string[];
    CC?: string[];
    BCC?: string[];
    Subject: string;
    Body: string;
    AdditionalHeaders?: TypedHash<string>;
    From?: string;
}

export interface WikiPageCreationInformation {
    /**
     * The server-relative-url of the wiki page to be created.
     */
    ServerRelativeUrl: string;


    /**
     * The wiki content to be set in the wiki page.
     */
    WikiHtmlContent: string;
}

export enum RenderListDataOptions {
    None = 0,
    ContextInfo = 1,
    ListData = 2,
    ListSchema = 4,
    MenuView = 8,
    ListContentType = 16,
    FileSystemItemId = 32,
    ClientFormSchema = 64,
    QuickLaunch = 128,
    Spotlight = 256,
    Visualization = 512,
    ViewMetadata = 1024,
    DisableAutoHyperlink = 2048,
    EnableMediaTAUrls = 4096,
    ParentInfo = 8192,
    PageContextInfo = 16384,
    ClientSideComponentManifest = 32768,
}

export interface RenderListDataParameters {
    AllowMultipleValueFilterForTaxonomyFields?: boolean;
    DatesInUtc?: boolean;
    ExpandGroups?: boolean;
    FirstGroupOnly?: boolean;
    FolderServerRelativeUrl?: string;
    ImageFieldsToTryRewriteToCdnUrls?: string;
    OverrideViewXml?: string;
    Paging?: string;
    RenderOptions?: RenderListDataOptions;
    ReplaceGroup?: boolean;
    ViewXml?: string;
}

export interface MenuNode {
    CustomProperties: any[];
    FriendlyUrlSegment: string;
    IsDeleted: boolean;
    IsHidden: boolean;
    Key: string;
    Nodes: MenuNode[];
    NodeType: number;
    SimpleUrl: string;
    Title: string;
}

export interface MenuNodeCollection {
    FriendlyUrlPrefix: string;
    Nodes: MenuNode[];
    SimpleUrl: string;
    SPSitePrefix: string;
    SPWebPrefix: string;
    StartingNodeKey: string;
    StartingNodeTitle: string;
    Version: Date;
}

export enum FieldUserSelectionMode {
    PeopleAndGroups = 1,
    PeopleOnly = 0,
}

export interface FieldCreationProperties extends TypedHash<string | number | boolean> {
    DefaultFormula?: string;
    Description?: string;
    EnforceUniqueValues?: boolean;
    FieldTypeKind?: number;
    Group?: string;
    Hidden?: boolean;
    Indexed?: boolean;
    Required?: boolean;
    Title?: string;
    ValidationFormula?: string;
    ValidationMessage?: string;
}

export enum ChoiceFieldFormatType {
    Dropdown,
    RadioButtons,
}
